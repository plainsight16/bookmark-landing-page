module.exports = {
  mode:"jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      left:{
        "-77":"-4.8125rem",
        "1/2":"50%",
      },
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
      fontFamily:{
        "Poppins":["Poppins, sans-serif" ]
      },
      keyframes:{
        fadeIn:{
          "0%":{
            opacity: 0,
            visibility: "invisible"
          },
          "1%":{
            opacity:0,
            visibility: "visible"
          },
          "100%":{
            opacity:1,
            visibility:"visible"
          }
        },
        fadeOut:{
          "0%":{
            opacity:1,
            visibility:"visible"
          },
          "1%":{
            opacity:1,
            visibility:"hidden"
          },
          "100%":{
            opacity:0,
            visibility:"visible"
          }
        },
        heightGrow:{
          "0%":{
            height:"h-0"
          },
          "30%":{
            height: "h-1/3"
          },
          "50%":{
            height:"h-2/4"
          },
          "75%":{
            height:"h-3/4"
          },
          "100%":{
            height:"h-full"
          }
        }
      },
      animation:{
        fadeIn:"fadeIn 0.3s ease-in-out forwards",
        fadeOut:"fadeOut 0.3s ease-in-out forwards",
        heightGrow: "heightGrow 5s ease-in-out forwards"
      }
    },
    container:{
      center:true,
      padding:"1rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px"
      },
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
