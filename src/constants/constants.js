export const projects = [
  {
    title: 'Color GAN',
    description: "Built a deep neural network model for colorizing grayscale images. Used Pix2Pix GAN a type of Conditional Generative Adversial Networks(cGAN) with a U- Net architecture to train model on 1100 coastal images dataset to achieve great accuracy." ,
      image: '/images/1.png',
      tags: ['Python', 'Tensorflow', 'Keras', 'CNN', 'GAN', 'U-Net'],
    source: 'https://github.com/prashishpaudel/imageColorizationCGAN',
    visit: 'https://github.com/prashishpaudel/imageColorizationCGAN',
    id: 0,
  },
  {
    title: 'Sentiment Analyzer',
    description:"An application which analyzes the sentiment of newspaper articles. Used Stacked Bidirectional Long short-term memory(BiLSTM) model to build News Sentiment Analyzer. Also, deployed a Flask app to display the live sentiment of News published in English Newspapers of Nepa suchas Republica, Himalayan Times, Kathmandu Post .",
    image: '/images/2.png',
    tags: ['Python', 'Keras', 'LSTM', 'Flask', 'Word2Vec', 'NLP'],
    source: 'https://github.com/prashishpaudel/newsSentimentAnalysis',
    visit: 'https://github.com/prashishpaudel/newsSentimentAnalysis',
    id: 1,
  },
  {
    title: 'Maritime Vessel Prediction',
    description: "Built a model to identify the trajectory of Maritime Vessel from AIS data using Unsupervised clustering technique. Also, analyzed latitude, longitude, speed, and angle to derive a model that predicted the trajectory of a vessel with great accuracy.",
      image: '/images/3.png',
      tags: ['Python', 'Seaborn', 'K-Means Clustering', 'ScikitLearn'],
    source: 'https://github.com/prashishpaudel/maritimeVesselPrediction',
    visit: 'https://github.com/prashishpaudel/maritimeVesselPrediction',
    id: 2,
  },
  {
    title: 'Neuroplay',
    description: "Built a feed forward neural networks to play Flappy bird game on its own. Used NEAT(Neuro Evolution of Augmented Topologies) algorithm to opimize the neural network and accomplished this without using any high level API's and only using NumPy library.",
    image: '/images/4.jpeg',
    tags: ['Python', 'NumPy',  'Genetic Algorithm', 'Neural Net'],
    source: 'https://github.com/prashishpaudel/neuroplay',
    visit: 'https://github.com/prashishpaudel/neuroplay',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2013, text: 'Completed Computer Engineering Degree from Tribhuvan University, Nepal.', },
  { year: 2018, text: 'Started working as Software Engineer at FOCUSONE Nepal Pvt.Ltd, Nepal.', },
  { year: 2021, text: 'Started MS in Computer Science at University of Toledo, OH, USA.', },
  { year: 2022, text: 'Worked as Conversational Chatbot Engineer Intern at Quantiphi Inc, MA, USA.', },
];