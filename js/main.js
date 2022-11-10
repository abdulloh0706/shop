let slc = document.querySelector('#slc')
let taom = document.querySelector('.taomlar')
let kiyimlar = document.querySelector('.kiyimlar')
let mevalar = document.querySelector('.mevalar')


// slc.addEventListener('change', e=>{
//     e.preventDefault()
//     if(slc.value == 'kiyimlar'){
//         taom.style.display = 'none'
//         mevalar.style.display = 'none'
//     }
//     else{
//         taom.style.display = 'block'
//         taom.style.display = 'flex'
//     }
//     if(slc.value == 'taomlar'){
//         kiyimlar.style.display = 'none'
//         mevalar.style.display = 'none'
//     }
//     else{
//         kiyimlar.style.display = 'block'
//         kiyimlar.style.display = 'flex'
//     }
//     if(slc.value == 'mevalar'){
//         kiyimlar.style.display = 'none'
//         taom.style.display = 'none'
//     }
//     else{
//         mevalar.style.display = 'block'
//         mevalar.style.display = 'flex'
//     }
// })

slc.addEventListener('change', e=>{
    e.preventDefault()
    if(slc.value == 'kiyimlar'){
        taom.style.display = 'none'
        mevalar.style.display = 'none'
        kiyimlar.style.display = 'block'
        kiyimlar.style.display = 'flex'
    }
    
    else if(slc.value == 'taomlar'){
        kiyimlar.style.display = 'none'
        mevalar.style.display = 'none'
        taom.style.display = 'block'
        taom.style.display = 'flex'
    }
    
    else if(slc.value == 'mevalar'){
        kiyimlar.style.display = 'none'
        taom.style.display = 'none'
        mevalar.style.display = 'block'
        mevalar.style.display = 'flex'
    }
    else{
        mevalar.style.display = 'block'
        mevalar.style.display = 'flex'
        taom.style.display = 'block'
        taom.style.display = 'flex'
        kiyimlar.style.display = 'block'
        kiyimlar.style.display = 'flex'
    }
    
})