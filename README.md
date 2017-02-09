# React-Native-Boilerplate
A skeletal React Native project that has all the simple navigation and tab bar for both android and ios


# enables easy file imports, example: "import { Example } from '~/components'"
npm install --save babel-preset-react-native-stage-0 babel-root-import

# include this code in .babelrc

{
    "presets": [
        "react-native-stage-0"
    ],
    "plugins": [
        ["babel-root-import", {
            "rootPathSuffix": "app"
        }]
    ]
}
