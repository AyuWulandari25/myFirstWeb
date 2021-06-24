$(document).ready(function(){
    $(".alert").hide()
    setTimeout(function(){
        $(".alert-1").fadeIn();
    }, 1000)

    setTimeout(function(){
        $(".alert-2").fadeIn();
    }, 2000)

    $(".close").click(function(){
        let alert= $(this).parent()
        console.log(alert)
        
        alert.remove()

        if($(".alert").length == 0) {
            $("#this-alert").remove()
        }
    })

    const berhasilsubmit = () => {
        swal ({
            title: 'Berhasil',
            text: 'Anda berhasil Komen',
            icon: 'success',
            button: 'oke'
        });
    }

    const gagalsubmit = () => {
        swal ({
            title: 'Gagal',
            text: 'Anda gagal komen nih',
            icon: 'error',
            button: 'submit'

        });
    }

    $(".form-comment").on('submit', function(event) {
        event.preventDefault();
        let namakomentator = $('.for-name').val();
        let textkomentar = $('.for-comment').val();

        if (namakomentator == '' || textkomentar == '') {
            gagalsubmit()
            
        } else if($( ".comment" ).append(`<img class="user" src="./img/user.png" alt="">
                    <p class="user-name">${namakomentator}</p>
                    <p class="user-comment text-center">${textkomentar}</p>`)) {
    
            berhasilsubmit()
            namakomentator = $('.for-name').val('');
            textkomentar = $('.for-comment').val('');            
            
        }                       
    })

    $(".card-title").mouseenter(function(){
        $(this).css('color', 'green')
    })

    $(".card-title").mouseleave(function(){
        $(this).css('color', '#0000A0')
    })

    $(".fa-facebook").mouseenter(function(){
        $(this).css('color', '#3b5998')
    })

    $(".fa-whatsapp").mouseenter(function(){
        $(this).css('color', '#25d366')
    })

    $(".fa-instagram").mouseenter(function(){
        $(this).css('color', '#c32aa3')
    })
    
})

