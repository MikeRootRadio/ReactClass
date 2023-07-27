import './App.css';
import Collapsible from './components/Collapsible';
import DeviceType from './components/DeviceType';
import VideoPlayer from './components/VideoPlayer';
import WindowSizeDisplay from './components/WindowSizeDisplay';

function App() {

  return (
    <>
      <WindowSizeDisplay />
      <DeviceType></DeviceType>
      <Collapsible title="React">
        The library for web and native user interfaces
      </Collapsible>
      <Collapsible title="Software Developers">
        Often a lonely and anti-social creature that mostly dwells inside feeding off Caffeine and watching reruns of the Office.
      </Collapsible>
      <Collapsible title="Project Manager">
        A sly creature intend on expanding scope endlessly while making outrageous promises to upper management.
      </Collapsible>
      <VideoPlayer videoUrl='./videos/beach.mp4'></VideoPlayer>
      <VideoPlayer videoUrl='./videos/splash.mp4'></VideoPlayer>
    </>
  );
}

export default App;
