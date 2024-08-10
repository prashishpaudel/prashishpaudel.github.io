export const projects = [
  {
    title: 'Color GAN',
    description: "Built a deep neural network model for colorizing grayscale images. Used Pix2Pix GAN a type of Conditional Generative Adversarial Network (cGAN) with a U- Net architecture to train the model on 1100 coastal images dataset and  achieved great accuracy on test image dataset.",
    image: '/images/1.png',
    tags: ['Python', 'Tensorflow', 'Keras', 'CNN', 'GAN', 'U-Net'],
    source: 'https://github.com/prashishpaudel/imageColorizationCGAN',
    visit: 'https://github.com/prashishpaudel/imageColorizationCGAN',
    id: 0,
  },
  {
    title: 'Sentiment Analyzer',
    description: "An application analyzing newspaper sentiment using a Stacked BiLSTM model. Built a News Sentiment Analyzer and deployed a Flask app displaying live sentiment of English News from Nepalese newspapers like Republica, Himalayan Times, and Kathmandu Post.",
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
    description: "Built a feed forward neural networks to play Flappy bird game on its own. Used NEAT(Neuro Evolution of Augmented Topologies) algorithm to opimize the neural network and accomplished this without using any high level API's and only using NumPy.",
    image: '/images/4.jpeg',
    tags: ['Python', 'NumPy', 'Genetic Algorithm', 'Neural Net'],
    source: 'https://github.com/prashishpaudel/neuroplay',
    visit: 'https://github.com/prashishpaudel/neuroplay',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2013, text: 'Started Computer Engineering Degree at Tribhuvan University, Nepal.', },
  { year: 2017, text: 'Completed Computer Engineering Degree from Tribhuvan University, Nepal.', },
  { year: 2018, text: 'Started working as Software Engineer at FOCUSONE Nepal Pvt.Ltd, Nepal.', },
  { year: 2021, text: 'Started MS in Computer Science at University of Toledo, OH, USA.', },
  { year: 2022, text: 'Worked as Conversational Chatbot Engineer Intern at Quantiphi Inc, MA, USA.', },
  { year: 2023, text: 'Completed MS in Computer Science from University of Toledo,OH, USA', },
  
];

export const publications = [
  {
    title: 'Automated Multimodal Performance Evaluation in Simulation-based Medical Education using Natural Language Processing',
    description: "Designed an innovative, integrative solution for simulation‑based medical education performance assessment. Utilized Natural Language Processing(NLP) coupled with precise physiological data analysis for a comprehensive, holistic multimodal evaluation of learner performance at instructor, learner, and environment level.",
    image: '/images/prepare.png',
    publication:' ACM/IEE 14th International Conference on Cyber-Physical Systems',
    source: 'https://dl.acm.org/doi/10.1145/3576841.3589624',
    id: 0
  },
  {
    title: 'Role of Smart Wearable Devices in Postoperative Care of Cardiac Surgery Patients',
    description:'This study investigates the role of smart wearables in post-surgical cardiac care. Over 60 days, these devices collected vital health data from 20 patients, enabling timely remote interventions. The findings suggest that such technology could potentially cut down on readmissions and serious post-discharge complications.',
    image: '/images/cardiac.png',
    publication:' 59th Annual Meeting of The Society of Thoracic Surgeons',
    source: 'https://www.eventscribe.net/2023/STS/fsPopup.asp?efp=S1hTSkxRTVIxMjA3Ng&PosterID=546050&rnd=0.2613683&mode=posterinfo',
    id: 0
  },
]