import axios from 'axios'

import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      addDeck(state, newDeck) {
        state.decks.push(newDeck)
      },
      editDeck(state, editDeck) {
        const deckIndex = state.decks.findIndex(
          (deck) => deck.id === editDeck.id
        )
        state.decks[deckIndex] = editDeck
      },
      setDecks(state, decks) {
        state.decks = decks
      },
    },
    getters: {
      decks(state) {
        return state.decks.reverse()
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            'https://nuxt-learning-english-bb51c-default-rtdb.firebaseio.com/decks.json'
          )
          .then((response) => {
            const decksArr = []
            for (const key in response.data) {
              decksArr.push({
                ...response.data[key],
                id: key,
              })

              vuexContext.commit('setDecks', decksArr)
            }
          })
          .catch((error) => {
            context.error(error)
          })
      },
      addDeck(vuexContext, deckData) {
        return axios
          .post(
            'https://nuxt-learning-english-bb51c-default-rtdb.firebaseio.com/decks.json',
            deckData
          )
          .then((result) => {
            // eslint-disable-next-line no-console
            vuexContext.commit('addDeck', {
              ...deckData,
              id: result.data.name,
            })
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            vuexContext.error(err)
          })
      },
      editDeck(vuexContext, deckData) {
        const deckId = deckData.id
        delete deckData.id
        return axios
          .put(
            `https://nuxt-learning-english-bb51c-default-rtdb.firebaseio.com/decks/${deckId}.json`,
            deckData
          )
          .then((result) => {
            vuexContext.commit('editDeck', {
              ...result.data,
              id: deckId,
            })
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err)
          })
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      },
    },
  })
}
export default createStore
