document.addEventListener('DOMContentLoaded', function(){

  const elementsToTranslate = document.querySelectorAll('[data-translate-es]')

  const btnChangeLaguage = document.getElementById('btn--translate')

  let language = 'es'

  btnChangeLaguage.addEventListener('click', function(){

    if (language === 'es'){
      for (const phrase of elementsToTranslate) {
          const translation = phrase.getAttribute('data-translate-en')
          phrase.textContent = translation
      }
      document.getElementById('downloadCV').href='../../assets/cv/cv_en.png'
      language = 'en'
    }else{
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-es')
        phrase.textContent = translation
    }
      document.getElementById('downloadCV').href='../../assets/cv/cv_es.png'
      language = 'es'

    }

  })




})