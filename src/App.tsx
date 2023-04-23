import WelcomePage from './components/welcome/welcomePage'
function App() {
  return (
    // div with tailwind flex
    <div className="flex, flex-col, items-center, justify-center, bg-gradient-to-r, from-green-400, to-blue-500">
      <WelcomePage />
    </div>
  )
};
export default App
