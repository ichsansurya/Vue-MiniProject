import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueApollo from "vue-apollo";
import { ApolloClient, HttpLink, InMemoryCache, split } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";


const httpLink = new HttpLink({
  uri: ''
});

const wsLink = new WebSocketLink({
  uri: "",
  options: {
    reconnect: true,
    lazy: true,
    inactivityTimeout: 30000,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
})


const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
Vue.use(VueToast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");