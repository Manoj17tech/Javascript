// const imageInput = document.getElementById('imageInput');
// const profileImage = document.getElementById('profileImage');
// const uploadBtn = document.getElementById('uploadBtn');

// uploadBtn.addEventListener('click',()=>{
//     const file = imageInput.files[0];
//     // console.log(file);

//     if(!file){
//         alert("Select an Image to Upload..!!")
//     }
    
//     const reader = new FileReader();

//     reader.onload = function(e){
//         profileImage.src = e.target.result
//         // console.log(e.target.value);
//         console.log(`result ${e.target.result}`);
//         profileImage.style.display = 'block'
//     }
//     reader.readAsDataURL(file)
// })

const imageInput = document.querySelector('#imageInput');
const profileImage = document.getElementById('profileImage');
const uploadBtn = document.getElementById('uploadBtn')

uploadBtn.addEventListener('click',()=>{
    const file = imageInput.files[0];

    if(!file){
        alert("Please Choose an Image")
    }

    const reader = new FileReader();
    
    reader.onload = function(e){
        profileImage.src = e.target.result

        profileImage.style.display = 'block'
    }

    reader.readAsDataURL(file)
})

