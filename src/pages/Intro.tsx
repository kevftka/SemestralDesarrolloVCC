import React from 'react'
import { Link, Navigate } from "react-router-dom"

import { FileInput, pushToast } from "../components/form"
import appStates from "../utils/states"
import { parseSrt, export2srt } from "../utils/caption"
import { getQueryParams } from "../utils/browser"

import "./intro.sass"
import appbanner from '../assets/CCgen.png'
import NavsBar from '../components/NavsBar'

type State = {
  subtitleUrl: string
  videoUrl: string
  subtitleFname: string
  videoFname: string
  canPass: boolean
}
export default class Intro extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      subtitleUrl: '',
      videoUrl: '',
      canPass: false,
      subtitleFname: "",
      videoFname: ""
    }

    this.handler = this.handler.bind(this)
    this.loadCaptions = this.loadCaptions.bind(this)
    this.loadVideo = this.loadVideo.bind(this)
    this.checkValidation = this.checkValidation.bind(this)
  }

  componentDidMount() {
    let
      params = getQueryParams(),
      sub = params["subtitle"] ?? "",
      vid = params["video"] ?? ""

      this.loadVideo(vid, vid)
      this.loadCaptions(sub, sub)
  }

  async loadCaptions(url: string, fname: string) {
    if (url === '') return

    const
      response = await fetch(url),
      data = await response.text()

    appStates.subtitles.setData(parseSrt (data))

    this.setState({
      subtitleUrl: url,
      subtitleFname: fname
    })
  }

  loadVideo(url: string, name: string) {
    appStates.videoUrl.setData(url)
    this.setState({ videoUrl: url, videoFname: name })
  }

  handler(f: File, fileType: "video" | "subtitle") {
    const blob = URL.createObjectURL(f)

    if (fileType === 'video')
      this.loadVideo(blob, f.name)

    else
      this.loadCaptions(blob, f.name)
  }

  checkValidation() {
    if (this.state.videoUrl)
      this.setState({ canPass: true })

    else
      pushToast({
        kind: 'danger',
        message: "seleccione un video",
        duration: 5000
      })
  }

  render() {
    if (this.state.canPass)
      return <Navigate to="/studio" />

    return (<>
    <NavsBar  />
      <h2 className="page-title"></h2>
      <div className="wrapper">

        <div className="alert alert-secondary">
          Considere usar 
          <Link to="/help"> la pagina de ayuda </Link>
          para aprender funciones y atajos de la aplicación
        </div>

        <div>
          <span> Archivo de video </span>
          <FileInput
            onChange={f => this.handler(f, 'video')}
            filename={this.state.videoFname} />
        </div>

        <div className="alert alert-info">
        Puedes comprobar los formatos de vídeo compatibles
          <a href="https://es.wikipedia.org/wiki/HTML5_video" target="blank"> aqui </a>
        </div>

        <div className="mt-3">
          <span> Archivo de subtitulos: </span>
          <FileInput
            onChange={f => this.handler(f, 'subtitle')}
            filename={this.state.subtitleFname}
          />
        </div>
        <div className="alert alert-warning">
        Si no selecciona un archivo de subtítulos, creamos uno nuevo. Formatos aceptados: .srt
        </div>

        <div className="center">
          <button className="btn btn-success font-weight-bold" onClick={this.checkValidation}>
            Ir al Estudio
          </button>
        </div>

      </div>


      <footer className="p-2 w-100 d-flex justify-content-center">
        <a href="https://github.com/eduardo-griffith-utp/generador-de-subtitulos-1LS231" target="blank"
          className="d-flex align-items-center">
          <span className="fab fa-github github-logo"></span>
          <span className="pb-1 mx-2"> enlace del proyecto en github </span>
        </a>
      </footer>
      
    </>)
  }
}
