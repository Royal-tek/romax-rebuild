import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
// import Projects from '../views/Projects.vue'
import Properties1 from '../views/Properties1.vue'
import Properties2 from '../views/Properties2.vue'
import Properties3 from '../views/Properties3.vue'
import Properties4 from '../views/Properties4.vue'
import Property from '../views/Property.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/projects',
  //   name: 'Projects',
  //   component: Projects
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/romax10',
    name: 'Properties1',
    component: Properties1
  },
  {
    path: '/atlanticville',
    name: 'Properties2',
    component: Properties2
  },
  {
    path: '/imperialoak',
    name: 'Properties3',
    component: Properties3
  },
  {
    path: '/romax12',
    name: 'Properties4',
    component: Properties4
  },
  {
    path: '/property/:id',
    name: 'Property',
    component: Property
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
