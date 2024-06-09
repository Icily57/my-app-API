import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {userRouter} from './users/user.router'
import { stateRouter } from './states/state.router'
import { cityRouter } from './city/city.router'
import { addressRouter } from './address/address.router'
import { restaurantRouter } from './restaurant/restaurant.router'
import { restaurantOwnerRouter } from './restaurant_owner/restaurant_owner.router'
import { ordersRouter } from './orders/orders.router'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//custom router
app.route('/api', userRouter)
app.route('/api', stateRouter)
app.route('/api', cityRouter)
app.route('/api', addressRouter)
app.route('/api', restaurantRouter)
app.route('/api', restaurantOwnerRouter)
app.route('/api', ordersRouter)

console.log("Server is running on port " + process.env.PORT)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT || 3000)
})
