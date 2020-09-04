import { createStore } from 'vuex'


export default createStore({
  state: {
    modelSid: "SxQL3iGyoDo",
    connectionStatus: 'notConnected',
    subscription: {},
    capturedPosition: {},
    mattertagIds: [],
    sdk: {}
  },
  mutations: {
    SET_CONNECTION_STATUS(state, connectionStatus) {
      state.connectionStatus = connectionStatus
    },
    SET_SDK(state, sdk) {
      state.sdk = sdk
    },
    SET_SUBSCRIPTION(state, subscription) {
      state.subscription = subscription
    },
    UNSUBSCRIBE(state) {
      state.subscription.cancel()
    },
    SET_CAPTURED_POSITION(state, position) {
      state.capturedPosition = position
    },
    ADD_MATTERTAG_ID(state, id) {
      state.mattertagIds.push(id)
    }
  },
  actions: {
    connectSdk(context) {
      context.commit('SET_CONNECTION_STATUS', 'connecting')
      try {
        window.MP_SDK.connect(
          document.getElementById('showcase_iframe'), // Obtained earlier
          '0341ea397a4a40e795e3fb2eede78766', // Your API key
          // TODO: proxy the API key
          '3.5' // SDK version you are using
        )
          .then((sdk) => {
            context.commit('SET_SDK', sdk)
            context.commit('SET_CONNECTION_STATUS', 'connected')
          })
          .catch(err => console.error(`Error: ${err}`));
      }
      catch (e) {
        console.error(e);
      }
    },
    capture(context) {
      if (context.state.connectionStatus === "connected") {
        context.commit('SET_SUBSCRIPTION',
          context.state.sdk.Pointer.intersection.subscribe(intersection => {
            context.commit('SET_CAPTURED_POSITION', intersection.position)
          })
        )
      }
    },
    endCapture(context) {
      context.commit('UNSUBSCRIBE')
    },
    createMattertag(context, data) {
      context.state.sdk.Mattertag.add(data).then(function(mattertagId) {
        context.commit('ADD_MATTERTAG_ID', mattertagId)
      })
    },
    addMedia(context, data) {
      var type = null
      switch(data.type) {
        case "photo": type = context.state.sdk.Mattertag.MediaType.PHOTO
      }
      context.state.sdk.Mattertag.editBillboard(data.id, {
        media: {
          type,
          src: data.src
        }
      })
    }
  },
  getters: {
    isConnected(state) {
      return state.connectionStatus === "connected"
    }
  }
})