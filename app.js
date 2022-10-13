const form = document.querySelector('form')

form.addEventListener("submit", function(event){
    event.preventDefault();
    let div=document.createElement('div');
    document.body.appendChild(div);
    div.setAttribute("class","container");
    
    div.addEventListener('click', function handleClick(event) {
        event.target.parentElement.remove();})

    let imgUrl= document.getElementById('url').value;
    let img=document.createElement('img');
    img.src = imgUrl;
    div.appendChild(img); 

    let newTP=document.createElement('p');
    newTP.setAttribute("class","topText");
     const topCaption=document.querySelector('#topCaption');
     newTP.innerText= topCaption.value;
     div.appendChild(newTP);

     let newBP=document.createElement('p');
    newBP.setAttribute("class","bottomText");
     const bottomCaption=document.querySelector('#bottomCaption');
     newBP.innerText= bottomCaption.value;
     div.appendChild(newBP)
     form.reset();
    
    
    })

    