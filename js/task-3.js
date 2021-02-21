const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createImgItem = (image) => {
  const liRef = document.createElement("li");

  const imgRef = document.createElement("img");
  imgRef.setAttribute("src", image.url);
  imgRef.setAttribute("alt", image.alt);
  imgRef.style.height = "200px";
  imgRef.style.outline = "2px solid black";

  liRef.appendChild(imgRef);

  return liRef;
};

const imgItems = images.map((image) => createImgItem(image));
console.log(imgItems);

const imgListRef = document.querySelector("#gallery");
console.log(imgListRef);

imgListRef.append(...imgItems);
