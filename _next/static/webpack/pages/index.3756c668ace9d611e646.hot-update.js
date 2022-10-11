/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'Color GAN',\n  description: \"Built a deep neural network model for colorizing grayscale images. Used Pix2Pix GAN a type of Conditional Generative Adversial Networks(cGAN) with a U- Net architecture to train model on 1100 coastal images dataset to achieve great accuracy.\",\n  image: '/images/1.png',\n  tags: ['Python', 'Tensorflow', 'Keras', 'CNN', 'GAN', 'U-Net'],\n  source: 'https://github.com/prashishpaudel/imageColorizationCGAN',\n  visit: 'https://github.com/prashishpaudel/imageColorizationCGAN',\n  id: 0\n}, {\n  title: 'Sentiment Analyzer',\n  description: \"An application which analyzes the sentiment of newspaper articles. Used Stacked Bidirectional Long short-term memory(BiLSTM) model to build News Sentiment Analyzer. Also, deployed a Flask app to display the live sentiment of News published in English Newspapers of Nepa suchas Republica, Himalayan Times, Kathmandu Post .\",\n  image: '/images/2.png',\n  tags: ['Python', 'Keras', 'LSTM', 'Flask', 'Word2Vec', 'NLP'],\n  source: 'https://github.com/prashishpaudel/newsSentimentAnalysis',\n  visit: 'https://github.com/prashishpaudel/newsSentimentAnalysis',\n  id: 1\n}, {\n  title: 'Maritime Vessel Prediction',\n  description: \"Built a model to identify the trajectory of Maritime Vessel from AIS data using Unsupervised clustering technique. Also, analyzed latitude, longitude, speed, and angle to derive a model that predicted the trajectory of a vessel with great accuracy.\",\n  image: '/images/3.png',\n  tags: ['Python', 'Seaborn', 'K-Means Clustering', 'ScikitLearn'],\n  source: 'https://github.com/prashishpaudel/maritimeVesselPrediction',\n  visit: 'https://github.com/prashishpaudel/maritimeVesselPrediction',\n  id: 2\n}, {\n  title: 'Neuroplay',\n  description: \"Built a feed forward neural networks to play Flappy bird game on its own. Used NEAT(Neuro Evolution of Augmented Topologies) algorithm to opimize the neural network and accomplished this without using any high level API's and only using NumPy library.\",\n  image: '/images/4.jpeg',\n  tags: ['Python', 'NumPy', 'Genetic Algorithm', 'Neural Net'],\n  source: 'https://github.com/prashishpaudel/neuroplay',\n  visit: 'https://github.com/prashishpaudel/neuroplay',\n  id: 3\n}];\nvar TimeLineData = [{\n  year: 2013,\n  text: 'Completed Computer Engineering Degree from Tribhuvan University, Nepal.'\n}, {\n  year: 2018,\n  text: 'Started working as Software Engineer at FOCUSONE Nepal Pvt.Ltd, Nepal.'\n}, {\n  year: 2021,\n  text: 'Started MS in Computer Science at University of Toledo, OH, USA.'\n}, {\n  year: 2022,\n  text: 'Worked as Conversational Chatbot Engineer Intern at Quantiphi Inc, MA, USA.'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsbVBBRmY7QUFHSUMsT0FBSyxFQUFFLGVBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQVgsRUFBeUIsT0FBekIsRUFBa0MsS0FBbEMsRUFBeUMsS0FBekMsRUFBZ0QsT0FBaEQsQ0FKVjtBQUtFQyxRQUFNLEVBQUUseURBTFY7QUFNRUMsT0FBSyxFQUFFLHlEQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxvQkFEVDtBQUVFQyxhQUFXLEVBQUMsbVVBRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEIsT0FBNUIsRUFBcUMsVUFBckMsRUFBaUQsS0FBakQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUseURBTFY7QUFNRUMsT0FBSyxFQUFFLHlEQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsNEJBRFQ7QUFFRUMsYUFBVyxFQUFFLDBQQUZmO0FBR0lDLE9BQUssRUFBRSxlQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLG9CQUF0QixFQUE0QyxhQUE1QyxDQUpWO0FBS0VDLFFBQU0sRUFBRSw0REFMVjtBQU1FQyxPQUFLLEVBQUUsNERBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsNlBBRmY7QUFHRUMsT0FBSyxFQUFFLGdCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQXFCLG1CQUFyQixFQUEwQyxZQUExQyxDQUpSO0FBS0VDLFFBQU0sRUFBRSw2Q0FMVjtBQU1FQyxPQUFLLEVBQUUsNkNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLENBQWpCO0FBdUNBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsQ0FBckIiLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnQ29sb3IgR0FOJyxcbiAgICBkZXNjcmlwdGlvbjogXCJCdWlsdCBhIGRlZXAgbmV1cmFsIG5ldHdvcmsgbW9kZWwgZm9yIGNvbG9yaXppbmcgZ3JheXNjYWxlIGltYWdlcy4gVXNlZCBQaXgyUGl4IEdBTiBhIHR5cGUgb2YgQ29uZGl0aW9uYWwgR2VuZXJhdGl2ZSBBZHZlcnNpYWwgTmV0d29ya3MoY0dBTikgd2l0aCBhIFUtIE5ldCBhcmNoaXRlY3R1cmUgdG8gdHJhaW4gbW9kZWwgb24gMTEwMCBjb2FzdGFsIGltYWdlcyBkYXRhc2V0IHRvIGFjaGlldmUgZ3JlYXQgYWNjdXJhY3kuXCIgLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzEucG5nJyxcbiAgICAgIHRhZ3M6IFsnUHl0aG9uJywgJ1RlbnNvcmZsb3cnLCAnS2VyYXMnLCAnQ05OJywgJ0dBTicsICdVLU5ldCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wcmFzaGlzaHBhdWRlbC9pbWFnZUNvbG9yaXphdGlvbkNHQU4nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL3ByYXNoaXNocGF1ZGVsL2ltYWdlQ29sb3JpemF0aW9uQ0dBTicsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NlbnRpbWVudCBBbmFseXplcicsXG4gICAgZGVzY3JpcHRpb246XCJBbiBhcHBsaWNhdGlvbiB3aGljaCBhbmFseXplcyB0aGUgc2VudGltZW50IG9mIG5ld3NwYXBlciBhcnRpY2xlcy4gVXNlZCBTdGFja2VkIEJpZGlyZWN0aW9uYWwgTG9uZyBzaG9ydC10ZXJtIG1lbW9yeShCaUxTVE0pIG1vZGVsIHRvIGJ1aWxkIE5ld3MgU2VudGltZW50IEFuYWx5emVyLiBBbHNvLCBkZXBsb3llZCBhIEZsYXNrIGFwcCB0byBkaXNwbGF5IHRoZSBsaXZlIHNlbnRpbWVudCBvZiBOZXdzIHB1Ymxpc2hlZCBpbiBFbmdsaXNoIE5ld3NwYXBlcnMgb2YgTmVwYSBzdWNoYXMgUmVwdWJsaWNhLCBIaW1hbGF5YW4gVGltZXMsIEthdGhtYW5kdSBQb3N0IC5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvMi5wbmcnLFxuICAgIHRhZ3M6IFsnUHl0aG9uJywgJ0tlcmFzJywgJ0xTVE0nLCAnRmxhc2snLCAnV29yZDJWZWMnLCAnTkxQJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3ByYXNoaXNocGF1ZGVsL25ld3NTZW50aW1lbnRBbmFseXNpcycsXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vcHJhc2hpc2hwYXVkZWwvbmV3c1NlbnRpbWVudEFuYWx5c2lzJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTWFyaXRpbWUgVmVzc2VsIFByZWRpY3Rpb24nLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWx0IGEgbW9kZWwgdG8gaWRlbnRpZnkgdGhlIHRyYWplY3Rvcnkgb2YgTWFyaXRpbWUgVmVzc2VsIGZyb20gQUlTIGRhdGEgdXNpbmcgVW5zdXBlcnZpc2VkIGNsdXN0ZXJpbmcgdGVjaG5pcXVlLiBBbHNvLCBhbmFseXplZCBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBzcGVlZCwgYW5kIGFuZ2xlIHRvIGRlcml2ZSBhIG1vZGVsIHRoYXQgcHJlZGljdGVkIHRoZSB0cmFqZWN0b3J5IG9mIGEgdmVzc2VsIHdpdGggZ3JlYXQgYWNjdXJhY3kuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvMy5wbmcnLFxuICAgICAgdGFnczogWydQeXRob24nLCAnU2VhYm9ybicsICdLLU1lYW5zIENsdXN0ZXJpbmcnLCAnU2Npa2l0TGVhcm4nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcHJhc2hpc2hwYXVkZWwvbWFyaXRpbWVWZXNzZWxQcmVkaWN0aW9uJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wcmFzaGlzaHBhdWRlbC9tYXJpdGltZVZlc3NlbFByZWRpY3Rpb24nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdOZXVyb3BsYXknLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJ1aWx0IGEgZmVlZCBmb3J3YXJkIG5ldXJhbCBuZXR3b3JrcyB0byBwbGF5IEZsYXBweSBiaXJkIGdhbWUgb24gaXRzIG93bi4gVXNlZCBORUFUKE5ldXJvIEV2b2x1dGlvbiBvZiBBdWdtZW50ZWQgVG9wb2xvZ2llcykgYWxnb3JpdGhtIHRvIG9waW1pemUgdGhlIG5ldXJhbCBuZXR3b3JrIGFuZCBhY2NvbXBsaXNoZWQgdGhpcyB3aXRob3V0IHVzaW5nIGFueSBoaWdoIGxldmVsIEFQSSdzIGFuZCBvbmx5IHVzaW5nIE51bVB5IGxpYnJhcnkuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQuanBlZycsXG4gICAgdGFnczogWydQeXRob24nLCAnTnVtUHknLCAgJ0dlbmV0aWMgQWxnb3JpdGhtJywgJ05ldXJhbCBOZXQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vcHJhc2hpc2hwYXVkZWwvbmV1cm9wbGF5JyAsXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vcHJhc2hpc2hwYXVkZWwvbmV1cm9wbGF5JyxcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxMywgdGV4dDogJ0NvbXBsZXRlZCBDb21wdXRlciBFbmdpbmVlcmluZyBEZWdyZWUgZnJvbSBUcmliaHV2YW4gVW5pdmVyc2l0eSwgTmVwYWwuJywgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnU3RhcnRlZCB3b3JraW5nIGFzIFNvZnR3YXJlIEVuZ2luZWVyIGF0IEZPQ1VTT05FIE5lcGFsIFB2dC5MdGQsIE5lcGFsLicsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0YXJ0ZWQgTVMgaW4gQ29tcHV0ZXIgU2NpZW5jZSBhdCBVbml2ZXJzaXR5IG9mIFRvbGVkbywgT0gsIFVTQS4nLCB9LFxuICB7IHllYXI6IDIwMjIsIHRleHQ6ICdXb3JrZWQgYXMgQ29udmVyc2F0aW9uYWwgQ2hhdGJvdCBFbmdpbmVlciBJbnRlcm4gYXQgUXVhbnRpcGhpIEluYywgTUEsIFVTQS4nLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});