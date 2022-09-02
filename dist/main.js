(()=>{"use strict";const e=async function(e,t){try{const n=`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=2856f7800e7e860f5f68bc404924d79f&units=${t}`,o=await fetch(n,{mode:"cors"});if(!o.ok)throw new Error("Location not found");return function(e){const{name:t,weather:[{main:n,icon:o}],main:{temp:r,feels_like:c,temp_min:i,temp_max:u,humidity:a,pressure:m},wind:{speed:d}}=e;return{city:t,main:n,icon:o,temperature:r,feels:c,low:i,high:u,humidity:a,pressure:m,windSpeed:d}}(await o.json())}catch(e){return alert(e),null}};function t(e){const t=document.querySelector(".city"),o=document.querySelector(".main-temp"),r=document.querySelector(".weather-main"),c=document.querySelector(".high-low"),i=document.querySelector(".main-image"),u=document.createElement("img"),a=document.querySelector(".feels"),m=document.querySelector(".humidity"),d=document.querySelector(".wind"),s=document.querySelector(".pressure"),l=function(e){return"metric"===n()?Math.round(3.6*e):Math.round(1.60934*e)}(e.windSpeed);t.textContent=e.city,o.textContent=`${e.temperature}°`,r.textContent=e.main,c.textContent=`H: ${e.high}° L: ${e.low}°`,u.src=`http://openweathermap.org/img/wn/${e.icon}@2x.png`,a.textContent=`${e.feels}°`,m.textContent=`${e.humidity}%`,d.textContent=`${l} km/h`,s.textContent=`${e.pressure} hPa`,i.innerHTML="",i.appendChild(u)}function n(){return document.querySelector('input[type="checkbox"').checked?"imperial":"metric"}const o=document.querySelector("button"),r=document.querySelector("#cityName"),c=document.querySelector("form"),i=document.querySelector('input[type="checkbox"]');c.addEventListener("submit",(e=>{e.preventDefault()})),o.addEventListener("click",(async()=>{const o=n();t(await e(r.value,o))})),document.addEventListener("DOMContentLoaded",(async()=>{const o=n();t(await e("Vancouver",o))})),i.addEventListener("click",(async()=>{const o=document.querySelector(".city").textContent,r=n();t(await e(o,r))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBK0JBLFFBZkFBLGVBQThCQyxFQUFVQyxHQUNwQyxJQUNJLE1BQU1DLEVBQU0sb0RBQW9ERixrREFBeURDLElBQ25IRSxRQUFpQkMsTUFBTUYsRUFBSyxDQUFFRyxLQUFNLFNBQzFDLElBQUtGLEVBQVNHLEdBQ1YsTUFBTSxJQUFJQyxNQUFNLHNCQUdwQixPQXhCUixTQUEwQkMsR0FFdEIsTUFDSUMsS0FBTUMsRUFDTkMsVUFBVSxLQUFFQyxFQUFJLEtBQUVDLElBQ2xCRCxNQUNJRSxLQUFNQyxFQUFhQyxXQUFZQyxFQUFPQyxTQUFVQyxFQUFLQyxTQUFVQyxFQUFJLFNBQUVDLEVBQVEsU0FBRUMsR0FFbkZDLE1BQVFDLE1BQU9DLElBQ2ZsQixFQUVKLE1BQU8sQ0FDSEUsT0FBTUUsT0FBTUMsT0FBTUUsY0FBYUUsUUFBT0UsTUFBS0UsT0FBTUMsV0FBVUMsV0FBVUcsWUFFN0UsQ0FTcUJDLE9BQXVCeEIsRUFBU3lCLE9BS2pELENBSEUsTUFBT0MsR0FFTCxPQURBQyxNQUFNRCxHQUNDLElBQ1gsQ0FDSixFQzdCQSxTQUFTRSxFQUFrQnZCLEdBQ3ZCLE1BQU1FLEVBQU9zQixTQUFTQyxjQUFjLFNBQzlCQyxFQUFXRixTQUFTQyxjQUFjLGNBQ2xDRSxFQUFjSCxTQUFTQyxjQUFjLGlCQUNyQ0csRUFBVUosU0FBU0MsY0FBYyxhQUNqQ0ksRUFBV0wsU0FBU0MsY0FBYyxlQUNsQ0ssRUFBVU4sU0FBU08sY0FBYyxPQUVqQ3RCLEVBQVFlLFNBQVNDLGNBQWMsVUFDL0JYLEVBQVdVLFNBQVNDLGNBQWMsYUFDbENULEVBQU9RLFNBQVNDLGNBQWMsU0FDOUJWLEVBQVdTLFNBQVNDLGNBQWMsYUFFbENSLEVBeUJWLFNBQXNCQSxHQUVsQixNQUFjLFdBREFlLElBRUhDLEtBQUtDLE1BQWMsSUFBUmpCLEdBRVhnQixLQUFLQyxNQUFjLFFBQVJqQixFQUUxQixDQWhDa0JrQixDQUFhbkMsRUFBS2tCLFdBRWhDaEIsRUFBS2tDLFlBQWNwQyxFQUFLRSxLQUN4QndCLEVBQVNVLFlBQWMsR0FBR3BDLEVBQUtPLGVBQy9Cb0IsRUFBWVMsWUFBY3BDLEVBQUtJLEtBQy9Cd0IsRUFBUVEsWUFBYyxNQUFNcEMsRUFBS2EsWUFBaUJiLEVBQUtXLE9BQ3ZEbUIsRUFBUU8sSUFBTSxvQ0FBb0NyQyxFQUFLSyxjQUV2REksRUFBTTJCLFlBQWMsR0FBR3BDLEVBQUtTLFNBQzVCSyxFQUFTc0IsWUFBYyxHQUFHcEMsRUFBS2MsWUFDL0JFLEVBQUtvQixZQUFjLEdBQUduQixTQUN0QkYsRUFBU3FCLFlBQWMsR0FBR3BDLEVBQUtlLGVBRS9CYyxFQUFTUyxVQUFZLEdBQ3JCVCxFQUFTVSxZQUFZVCxFQUN6QixDQUVBLFNBQVNFLElBRUwsT0FEbUJSLFNBQVNDLGNBQWMseUJBQzFCZSxRQUdULFdBRkksUUFHZixDQ2pDQSxNQUFNQyxFQUFNakIsU0FBU0MsY0FBYyxVQUM3QmlCLEVBQVFsQixTQUFTQyxjQUFjLGFBQy9CLEVBQU9ELFNBQVNDLGNBQWMsUUFDOUJrQixFQUFTbkIsU0FBU0MsY0FBYywwQkFFdEMsRUFBS21CLGlCQUFpQixVQUFXQyxJQUM3QkEsRUFBRUMsZ0JBQWdCLElBR3RCTCxFQUFJRyxpQkFBaUIsU0FBU3JELFVBQzFCLE1BQU1FLEVBQVF1QyxJQUVkVCxRQURtQixFQUFlbUIsRUFBTUssTUFBT3RELEdBQ3hCLElBRzNCK0IsU0FBU29CLGlCQUFpQixvQkFBb0JyRCxVQUMxQyxNQUFNRSxFQUFRdUMsSUFFZFQsUUFEbUIsRUFBZSxZQUFhOUIsR0FDeEIsSUFHM0JrRCxFQUFPQyxpQkFBaUIsU0FBU3JELFVBQzdCLE1BQU15RCxFQUFjeEIsU0FBU0MsY0FBYyxTQUFTVyxZQUM5QzNDLEVBQVF1QyxJQUVkVCxRQURtQixFQUFleUIsRUFBYXZELEdBQ3hCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGVhbldlYXRoZXJEYXRhKGRhdGEpIHtcbiAgICAvLyB1c2luZyBvYmplY3QgZGVzdHJ1Y3R1cmluZ1xuICAgIGNvbnN0IHtcbiAgICAgICAgbmFtZTogY2l0eSxcbiAgICAgICAgd2VhdGhlcjogW3sgbWFpbiwgaWNvbiB9XSxcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgdGVtcDogdGVtcGVyYXR1cmUsIGZlZWxzX2xpa2U6IGZlZWxzLCB0ZW1wX21pbjogbG93LCB0ZW1wX21heDogaGlnaCwgaHVtaWRpdHksIHByZXNzdXJlLFxuICAgICAgICB9LFxuICAgICAgICB3aW5kOiB7IHNwZWVkOiB3aW5kU3BlZWQgfSxcbiAgICB9ID0gZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNpdHksIG1haW4sIGljb24sIHRlbXBlcmF0dXJlLCBmZWVscywgbG93LCBoaWdoLCBodW1pZGl0eSwgcHJlc3N1cmUsIHdpbmRTcGVlZCxcbiAgICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdHMpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTI4NTZmNzgwMGU3ZTg2MGY1ZjY4YmM0MDQ5MjRkNzlmJnVuaXRzPSR7dW5pdHN9YDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjbGVhbldlYXRoZXJEYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KGVycm9yKTsgLy8gZnV0dXJlOiBjcmVhdGUgbGVzcyBpbnRydXNpdmUgZXJyb3JcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTtcbiIsImZ1bmN0aW9uIHJlbmRlcldlYXRoZXJEYXRhKGRhdGEpIHtcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICBjb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRlbXAnKTtcbiAgICBjb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLW1haW4nKTtcbiAgICBjb25zdCBoaWdoTG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2gtbG93Jyk7XG4gICAgY29uc3QgbWFpbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbWFnZScpO1xuICAgIGNvbnN0IGltZ0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGNvbnN0IGZlZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzJyk7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcbiAgICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZScpO1xuXG4gICAgY29uc3Qgc3BlZWQgPSBjb252ZXJ0U3BlZWQoZGF0YS53aW5kU3BlZWQpO1xuXG4gICAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eTtcbiAgICBtYWluVGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEudGVtcGVyYXR1cmV9XFx1MDBCMGA7XG4gICAgbWFpbldlYXRoZXIudGV4dENvbnRlbnQgPSBkYXRhLm1haW47XG4gICAgaGlnaExvdy50ZXh0Q29udGVudCA9IGBIOiAke2RhdGEuaGlnaH1cXHUwMEIwIEw6ICR7ZGF0YS5sb3d9XFx1MDBCMGA7XG4gICAgaW1nSWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDJ4LnBuZ2A7XG5cbiAgICBmZWVscy50ZXh0Q29udGVudCA9IGAke2RhdGEuZmVlbHN9XFx1MDBCMGA7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5fSVgO1xuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtzcGVlZH0ga20vaGA7XG4gICAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhLnByZXNzdXJlfSBoUGFgO1xuXG4gICAgbWFpbkljb24uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbkljb24uYXBwZW5kQ2hpbGQoaW1nSWNvbik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVW5pdCgpIHtcbiAgICBjb25zdCB1bml0U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCInKTtcbiAgICBpZiAoIXVuaXRTbGlkZXIuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gJ21ldHJpYyc7XG4gICAgfVxuICAgIHJldHVybiAnaW1wZXJpYWwnO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3BlZWQoc3BlZWQpIHtcbiAgICBjb25zdCB1bml0cyA9IGNoZWNrVW5pdCgpO1xuICAgIGlmICh1bml0cyA9PT0gJ21ldHJpYycpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoc3BlZWQgKiAzLjYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHNwZWVkICogMS42MDkzNCApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyV2VhdGhlckRhdGEsIGNoZWNrVW5pdCB9O1xuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gJy4vd2VhdGhlcic7XG5pbXBvcnQgeyByZW5kZXJXZWF0aGVyRGF0YSwgY2hlY2tVbml0IH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHlOYW1lJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVuaXRzID0gY2hlY2tVbml0KCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGlucHV0LnZhbHVlLCB1bml0cyk7XG4gICAgcmVuZGVyV2VhdGhlckRhdGEoZGF0YSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1bml0cyA9IGNoZWNrVW5pdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgnVmFuY291dmVyJywgdW5pdHMpO1xuICAgIHJlbmRlcldlYXRoZXJEYXRhKGRhdGEpO1xufSk7XG5cbnNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JykudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdW5pdHMgPSBjaGVja1VuaXQoKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoY3VycmVudENpdHksIHVuaXRzKTtcbiAgICByZW5kZXJXZWF0aGVyRGF0YShkYXRhKTtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jIiwibG9jYXRpb24iLCJ1bml0cyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwib2siLCJFcnJvciIsImRhdGEiLCJuYW1lIiwiY2l0eSIsIndlYXRoZXIiLCJtYWluIiwiaWNvbiIsInRlbXAiLCJ0ZW1wZXJhdHVyZSIsImZlZWxzX2xpa2UiLCJmZWVscyIsInRlbXBfbWluIiwibG93IiwidGVtcF9tYXgiLCJoaWdoIiwiaHVtaWRpdHkiLCJwcmVzc3VyZSIsIndpbmQiLCJzcGVlZCIsIndpbmRTcGVlZCIsImNsZWFuV2VhdGhlckRhdGEiLCJqc29uIiwiZXJyb3IiLCJhbGVydCIsInJlbmRlcldlYXRoZXJEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpblRlbXAiLCJtYWluV2VhdGhlciIsImhpZ2hMb3ciLCJtYWluSWNvbiIsImltZ0ljb24iLCJjcmVhdGVFbGVtZW50IiwiY2hlY2tVbml0IiwiTWF0aCIsInJvdW5kIiwiY29udmVydFNwZWVkIiwidGV4dENvbnRlbnQiLCJzcmMiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNoZWNrZWQiLCJidG4iLCJpbnB1dCIsInNsaWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImN1cnJlbnRDaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==