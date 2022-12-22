import {useEffect} from 'react';
import NoSSR from 'react-no-ssr';

const Map = () => {
  if (typeof window !== 'undefined') {
    // Засунул "как было", код не трогал
    window.uteka = window.uteka || {};
    (window.uteka._host = 'widget.uteka.ru'),
        (window.uteka._queue = []);
    window.uteka._loaded = false;
    window.uteka.onReady = function(callback) {
      if (window.uteka._loaded) {
        return callback();
      }

      window.uteka._queue.push(callback);
    };

    var script = document.createElement('script');
    script.src =
        'https://' +
        window.uteka._host +
        '/static/widgets/widget.compiled.js?l=' +
        Date.now();
    script.async = true;
    script.addEventListener('load', function() {
      window.uteka._loaded = true;
      window.uteka._queue.forEach(function(callback) {
        callback();
      });
    });

    document.head.appendChild(script);
  }

  useEffect(() => {
    window.uteka?.onReady(function() {
      var widget = document.querySelector('.uteka-widget');

      window.uteka.loadWidget(widget, {
        productId: '361870',
      });
    });
  }, []);

  return (
      <NoSSR>
        <div className="map-uteka__container">
          <div className="uteka-widget">
            <iframe loading="lazy" allow="geolocation"></iframe>
          </div>
        </div>
      </NoSSR>

  );
};

export default Map;