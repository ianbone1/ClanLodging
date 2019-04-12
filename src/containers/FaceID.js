import React, {Component} from 'react'
import * as faceapi from 'face-api.js'

class FaceID extends Component{



  async loadWeights(){
    const MODEL_URL = '/models'
     console.log("Loading models....")
     await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
     await faceapi.loadFaceLandmarkModel(MODEL_URL)
     await faceapi.loadFaceRecognitionModel(MODEL_URL)
     console.log("Models loaded.")

     const input = document.getElementById('myImage')
     let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()
     console.log(fullFaceDescriptions)

     const detectionsArray = fullFaceDescriptions.map(fd => fd.detection)
     faceapi.drawDetection('myCanvas', detectionsArray, { withScore: true })

     const landmarksArray = fullFaceDescriptions.map(fd => fd.landmarks)
     faceapi.drawLandmarks('myCanvas', landmarksArray, { drawLines: true })
  }
  // <canvas id="myCanvas" width="1080px" height="720px" moz-opaque="false">
  // </canvas>


    render() {
      this.loadWeights()
      return (
        <div>
          Face API
          <canvas id="myCanvas" width="1080px" height="720px" moz-opaque="true"></canvas>
          <img id="myImage" src="/images/Ian.jpg" alt="myImage" width="1080px" height="720px"/>

        </div>

      );
    }

}

export default FaceID;
