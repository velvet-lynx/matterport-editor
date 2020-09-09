import { createStore } from 'vuex'


// function unProxy(data) {
//   let res = {}
//   Object.keys(data).forEach(key => {
//     let elem = data[key]
//     if (typeof(elem) === 'object')
//       res[key] = unProxy(elem)
//     res[key] = elem
//   })
//   return res
// }

export default createStore({
  state: {
    modelSid: "SxQL3iGyoDo",
    connectionStatus: 'notConnected',
    mattertags: {},
    currentMattertagId: "",
    currentMattertagInfos: {
      label: "",
      anchorPosition: {x: 0, y: 0, z: 0},
      stemVector: {x: 0, y: 0, z: 0},
    },
    currentMattertagMedia: {},
    subscription: null,
    capturedPosition: {},
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
      state.subscription = null
    },
    SET_ANCHOR_POSITION(state, position) {
      state.currentMattertagInfos.anchorPosition = position
    },
    SET_STEM_VECTOR(state, stemVector) {
      state.currentMattertagInfos.stemVector = stemVector
    },
    SET_LABEL(state, label) {
      state.currentMattertagInfos.label = label
    },
    ADD_MATTERTAG(state, id, data) {
      state.mattertags[id] = {
        ...data,
        media: {}
      }
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
    inputLabel(context, label) {
      context.commit('SET_LABEL', label)
    },
    inputStemVector(context, stemVector) {
      context.commit('SET_STEM_VECTOR', stemVector)
    },
    capture(context) {
      if (context.state.connectionStatus === "connected") {
        context.commit('SET_SUBSCRIPTION',
          context.state.sdk.Pointer.intersection.subscribe(intersection => {
            context.commit('SET_ANCHOR_POSITION', intersection.position)
          })
        )
      }
    },
    endCapture(context) {
      if (context.state.subscription !== null) {
        context.commit('UNSUBSCRIBE')
      }
    },
    createMattertag(context) {
      let infos = context.state.currentMattertagInfos
      let data = {
        label: infos.label,
        anchorPosition: {
          x: infos.anchorPosition.x,
          y: infos.anchorPosition.y,
          z: infos.anchorPosition.z,
        },
        stemVector: {
          x: infos.stemVector.x,
          y: infos.stemVector.y,
          z: infos.stemVector.z,
        }
      }
      console.log(data)
      context.state.sdk.Mattertag
        .add(data)
        .then(function(mattertagId) {
          context.commit('ADD_MATTERTAG', mattertagId, data)
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