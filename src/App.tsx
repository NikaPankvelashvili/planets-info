import { createRoutesFromElements, RouterProvider, Route, Navigate, createHashRouter } from 'react-router-dom';
import Header from './components/Header';
import PlanetPage from './components/PlanetPage';
import data from './data'
import PlanetInfo from './components/PlanetInfo';
import NotFound from './components/NotFound';



const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<><Header /></>}>
      <Route path='/' element={<Navigate to={"/mercury/overview"} />} />
      {/* <Route path='/planets-info' element={<Navigate to={"./mercury/overview"} />} /> */}

      <Route path='mercury' element={<PlanetPage color='#419EBB' data={data[0]} />} >
        <Route path='/mercury' element={<Navigate to={"/mercury/overview"} />} />
        <Route path='overview' element={<PlanetInfo color='#419EBB' details={data[0].overview} image={data[0].images.planet} data={data[0]} />} />
        <Route path='structure' element={<PlanetInfo color='#419EBB' details={data[0].structure} image={data[0].images.internal} data={data[0]} />} />
        <Route path='surface' element={<PlanetInfo color='#419EBB' details={data[0].geology} image={data[0].images.planet} extraImage={data[0].images.geology} data={data[0]} />} />
      </Route>

      <Route path='venus' element={<PlanetPage color='#EDA249' data={data[1]} />} >
        <Route path='/venus' element={<Navigate to={"/venus/overview"} />} />
        <Route path='overview' element={<PlanetInfo color='#EDA249' details={data[1].overview} image={data[1].images.planet} data={data[1]} />} />
        <Route path='structure' element={<PlanetInfo color='#EDA249' details={data[1].structure} image={data[1].images.internal} data={data[1]} />} />
        <Route path='surface' element={<PlanetInfo color='#EDA249' details={data[1].geology} image={data[1].images.planet} extraImage={data[1].images.geology} data={data[1]} />} />
      </Route>

      <Route path='earth' element={<PlanetPage color='#6D2ED5' data={data[2]} />} >
        <Route path='/earth' element={<Navigate to={"/earth/overview"} />} />
        <Route path='overview' element={<PlanetInfo color='#6D2ED5' details={data[2].overview} image={data[2].images.planet} data={data[2]} />} />
        <Route path='structure' element={<PlanetInfo color='#6D2ED5' details={data[2].structure} image={data[2].images.internal} data={data[2]} />} />
        <Route path='surface' element={<PlanetInfo color='#6D2ED5' details={data[2].geology} image={data[2].images.planet} extraImage={data[2].images.geology} data={data[2]} />} />
      </Route>

      <Route path='mars' element={<PlanetPage color='#D14C32' data={data[3]} />} >
        <Route path='/mars' element={<Navigate to={"/mars/overview"} />} />
        <Route path='overview' element={<PlanetInfo color='#D14C32' details={data[3].overview} image={data[3].images.planet} data={data[3]} />} />
        <Route path='structure' element={<PlanetInfo color='#D14C32' details={data[3].structure} image={data[3].images.internal} data={data[3]} />} />
        <Route path='surface' element={<PlanetInfo color='#D14C32' details={data[3].geology} image={data[3].images.planet} extraImage={data[3].images.geology} data={data[0]} />} />
      </Route>

      <Route path='jupiter' element={<PlanetPage color='#D83A34' data={data[4]} />} >
        <Route path='/jupiter' element={<Navigate to={"/jupiter/overview"} />} />
        <Route path='overview' element={<PlanetInfo color='#D83A34' details={data[4].overview} image={data[4].images.planet} data={data[4]} />} />
        <Route path='structure' element={<PlanetInfo color='#D83A34' details={data[4].structure} image={data[4].images.internal} data={data[4]} />} />
        <Route path='surface' element={<PlanetInfo color='#D83A34' details={data[4].geology} image={data[4].images.planet} extraImage={data[4].images.geology} data={data[4]} />} />
      </Route>

      <Route path='saturn' element={<PlanetPage color='#CD5120' data={data[5]} />} >
        <Route path='/saturn' element={<Navigate to={"/saturn/overview"} />} />
        <Route path='overview' element={<PlanetInfo color='#CD5120' details={data[5].overview} image={data[5].images.planet} data={data[5]} />} />
        <Route path='structure' element={<PlanetInfo color='#CD5120' details={data[5].structure} image={data[5].images.internal} data={data[5]} />} />
        <Route path='surface' element={<PlanetInfo color='#CD5120' details={data[5].geology} image={data[5].images.planet} extraImage={data[5].images.geology} data={data[5]} />} />
      </Route>

      <Route path='uranus' element={<PlanetPage color='#1EC1A2' data={data[6]} />} >
        <Route path='/uranus' element={<Navigate to={"/uranus/overview"} />} />
        <Route path='overview' element={<PlanetInfo color='#1EC1A2' details={data[6].overview} image={data[6].images.planet} data={data[6]} />} />
        <Route path='structure' element={<PlanetInfo color='#1EC1A2' details={data[6].structure} image={data[6].images.internal} data={data[6]} />} />
        <Route path='surface' element={<PlanetInfo color='#1EC1A2' details={data[6].geology} image={data[6].images.planet} extraImage={data[6].images.geology} data={data[6]} />} />
      </Route>

      <Route path='neptune' element={<PlanetPage color='#2D68F0' data={data[7]} />} >
        <Route path='/neptune' element={<Navigate to={"/neptune/overview"} />} />
        <Route path='overview' element={<PlanetInfo color='#2D68F0' details={data[7].overview} image={data[7].images.planet} data={data[7]} />} />
        <Route path='structure' element={<PlanetInfo color='#2D68F0' details={data[7].structure} image={data[7].images.internal} data={data[7]} />} />
        <Route path='surface' element={<PlanetInfo color='#2D68F0' details={data[7].geology} image={data[7].images.planet} extraImage={data[7].images.geology} data={data[7]} />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
