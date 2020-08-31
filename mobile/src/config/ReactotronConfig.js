import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure().useReactNative().connect();

  console.tron = tron; // crio uma propriedade no console e passo as configurações do reactotron

  tron.clear(); // Limpar a cada reload
}
// Caso rode o projeto no celular, defina o host em configure({host:'ip'})
