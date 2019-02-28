import Vue from "vue"
import Router from "vue-router"
import Index from "@/components/Index"
import Experience from "@/components/Experience"
Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		component: Index
	}, {
		path: "/experience",
		component: Experience
	}]
})