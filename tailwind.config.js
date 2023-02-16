module.exports = { mode: "jit",
    content: [
      "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
    ],
    darkMode: "class",
    theme: {
      screens:
        {"md":{"max":"1050px"},"sm":{"max":"550px"}}
      ,
      extend:
        {"colors":{"white_A700_7f":"#ffffff7f","white_A700_6c":"#fcfefe6c","indigo_900_6c":"#1f2b6c6c","blue_500":"#159eec","white_A700_a2":"#fcfefea2","indigo_900_a2":"#1f2b6ca2","gray_900":"#202124","indigo_900_90":"#1f2b6c90","indigo_A200":"#5269e8","black_900_0c":"#0000000c","gray_300":"#e5e4e8","gray_50":"#fafdfe","indigo_900_63":"#1f2b6c63","black_900":"#000000","white_A700_01":"#ffffff","indigo_900":"#1f2b6c","blue_100":"#bed2f7","gray_200_00":"#ebeaef00","deep_purple_A200":"#7b61ff","white_A700":"#fcfefe"},"fontFamily":{"yesevaone":"Yeseva One","worksans":"Work Sans"},"backgroundImage":{"gradient":"linear-gradient(259deg ,#e5e4e8,#ebeaef00)"},"boxShadow":{"bs":"0px 0px  20px 0px #0000000c"}}
      ,
    },
    plugins: [require("@tailwindcss/forms")]
  }