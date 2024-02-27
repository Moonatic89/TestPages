import { ref, reactive, onMounted } from 'vue';

// Main language state
const currentLang = ref({});

// Language templates
const languageTemplate = ref({

});

// Language switching function
const GetLanguage = (value) => {
  switch (value) {
    case 'italian':
      return 'italian';
    case 'spanish':
      return 'spanish';
    case 'english':
      return 'english';
    case 'french':
      return 'french';
    case 'german':
      return 'german';
    default:
      let userLang = navigator.language || navigator.userLanguage;
      return userLang === 'it-IT' ? 'italian' : 'english';
  }
};

// Function to get the right branch based on the keyword
const Branches = (keyword, language, inner = false) => {
  if (inner) {
    return languageTemplate.value[keyword][inner][language];
  } else {
    return languageTemplate.value[keyword][language];
  }
};

export { Branches, GetLanguage };
// 2122