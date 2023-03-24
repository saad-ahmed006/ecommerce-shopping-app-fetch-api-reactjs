import { createStore } from 'redux'
import rootred from './redux/reducer/combin'

const store=createStore(
    rootred
)

export default store