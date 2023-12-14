import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function MapPicker() {

  // const [poiaddress, setPoiaddress] = useState<string>('');
  const navigate=useNavigate()
  //把定位存起来
  useEffect(() => {
    const handleMessage = (event: { data: any }) => {
      const loc = event.data;
      if (loc && loc.module === 'locationPicker') {
        console.log(loc);
        // setPoiaddress(loc.poiaddress);
        if (localStorage.getItem('poiaddress')) {
          localStorage.removeItem('poiaddress');
        }
        localStorage.setItem('poiaddress', loc.poiaddress);
        navigate('/cargo');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [navigate]);

  return (
    <div className="h-screen">
      <iframe
        id="mapPage"
        className="h-full w-full"
        src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=R4UBZ-V46LL-BNLPX-M5EE4-VMS4H-XQF4N
N&referer=myapp"
      >
      </iframe>
    </div>
  );
}

export default MapPicker;
