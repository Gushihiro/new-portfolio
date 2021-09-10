import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// @ts-ignore
import ResumeIcon from '../images/resumeIcon.jpg'

export default function Resume() {
  const data = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Hiroto_Robinson_Resume" }) {
        name
        extension
        publicURL
      }
    }
  `)
  return (
    <Example data={data}/>
  )
}

class Example extends React.Component {
  render() {
    return (
      <Link to={this.props.data.pdf.publicURL} target="_blank">
        <img className='footerImg' src={ResumeIcon} alt="Resume" />
      </Link>
    );
  }
}