import ConfigureStoreDev from './configureStore.dev'
import ConfigureStoreProd from './configureStore.prod'

let ConfigureStore

if (__PRODUCTION__) {
  ConfigureStore = ConfigureStoreProd
} else {
  ConfigureStore = ConfigureStoreDev
}

export default ConfigureStore
