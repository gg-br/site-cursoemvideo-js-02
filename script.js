function verificar ()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano)
    {
        window.alert('erro')
    }

    else
    {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')

        if (fsex[0].checked)
        {
            genero = 'Homem'

            if (idade >=0 && idade < 10)
            {
                img.setAttribute('src', 'imagens/hbebe.jpg')
            }

            else if (idade <21)
            {
                img.setAttribute('src', 'imagens/hjovem.jpg')
            }

            else if (idade <50)
            {
                img.setAttribute('src', 'imagens/h.jpg')
            }

            else
            {
                img.setAttribute('src', 'imagens/hvelho.jpg')
            }     
        }

        else if (fsex[1].checked)
        {
            genero = 'Mulher'

            if (idade >=0 && idade < 10)
            {
                img.setAttribute('src', 'imagens/mbebe.jpg')
            }

            else if (idade <21)
            {
                img.setAttribute('src', 'imagens/mjovem.jpg')
            }

            else if (idade <50)
            {
                img.setAttribute('src', 'imagens/m.jpg')
            }

            else
            {
                img.setAttribute('src', 'imagens/mvelho.jpg')
            }     
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)

    }
}