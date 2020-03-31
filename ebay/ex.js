
const imageGalery = () => {
  const imageList = document.getElementsByClassName('img');
  let count = 0;
  setInterval( () => {
      imageList[count % imageList.length].style.display  = 'none';
      count ++;
      imageList[count % imageList.length].style.display = 'block';   
  } , 1000);
}

imageGalery();