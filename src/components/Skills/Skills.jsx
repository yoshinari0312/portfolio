import { Layout } from "../common/Layout"
import { TitleHeader } from "../common/TitleHeader"
import { SkillsGroup } from "./SkillsGroup"
import { SkillsIcon } from "./SkillsIcon"
import { SkillsLayout } from "./SkillsLayout"
import { useState } from "react"
import { IconButton, Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./Skills.css"

export const Skills = () => {
  const [showAWSIcons, setShowAWSIcons] = useState(false);

  // ベースパスを定義
  const baseImageUrl = `${process.env.PUBLIC_URL}/img/SkillImages`;

  const frequentlyUsedSkills = [
    { imageUrl: `${baseImageUrl}/Python.svg`, name: "Python" },
    { imageUrl: `${baseImageUrl}/Java.svg`, name: "Java" },
    { imageUrl: `${baseImageUrl}/HTML.svg`, name: "HTML" },
    { imageUrl: `${baseImageUrl}/CSS.svg`, name: "CSS" },
    { imageUrl: `${baseImageUrl}/JavaScript.svg`, name: "JavaScript" },
    { imageUrl: `${baseImageUrl}/React.svg`, name: "React" },
    { imageUrl: `${baseImageUrl}/JQuery.svg`, name: "JQuery" },
    { imageUrl: `${baseImageUrl}/MySQL.svg`, name: "MySQL" },
    { imageUrl: `${baseImageUrl}/OpenAIAPI.svg`, name: "OpenAI API" },
    { imageUrl: `${baseImageUrl}/Flask.svg`, name: "Flask" },
    { imageUrl: `${baseImageUrl}/VBA.jpg`, name: "VBA" },
    { imageUrl: `${baseImageUrl}/PowerAutomate.svg`, name: "Power\nAutomate" },
    { imageUrl: `${baseImageUrl}/GitHub.svg`, name: "GitHub" },
    { imageUrl: `${baseImageUrl}/AndroidStudio.svg`, name: "Android\nStudio" }
  ];

  const learningSkills = [
    { imageUrl: `${baseImageUrl}/C.svg`, name: "C" },
    { imageUrl: `${baseImageUrl}/CSharp.svg`, name: "C#" },
    { imageUrl: `${baseImageUrl}/MATLAB.svg`, name: "MATLAB" },
    { imageUrl: `${baseImageUrl}/Unity.svg`, name: "Unity" },
    { imageUrl: `${baseImageUrl}/Docker.svg`, name: "Docker" },
    { imageUrl: `${baseImageUrl}/LangChain.svg`, name: "LangChain" },
    { imageUrl: `${baseImageUrl}/Numpy.svg`, name: "Numpy" },
    { imageUrl: `${baseImageUrl}/Pandas.svg`, name: "Pandas" },
    { imageUrl: `${baseImageUrl}/PostgreSQL.svg`, name: "PostgreSQL" },
    { imageUrl: `${baseImageUrl}/PowerApps.svg`, name: "Power Apps" },
    { imageUrl: `${baseImageUrl}/RaspberryPi.svg`, name: "Raspberry Pi" },
    { imageUrl: `${baseImageUrl}/GCP.svg`, name: "GCP" }
  ];

  const awsIcons = [
    { imageUrl: `${baseImageUrl}/Transcribe.svg`, name: "Transcribe" },
    { imageUrl: `${baseImageUrl}/Amplify.svg`, name: "Amplify" },
    { imageUrl: `${baseImageUrl}/APIGateway.svg`, name: "APIGateway" },
    { imageUrl: `${baseImageUrl}/CloudFront.svg`, name: "CloudFront" },
    { imageUrl: `${baseImageUrl}/RDS.svg`, name: "RDS" },
    { imageUrl: `${baseImageUrl}/DynamoDB.svg`, name: "DynamoDB" },
    { imageUrl: `${baseImageUrl}/CodeCommit.svg`, name: "CodeCommit" },
    { imageUrl: `${baseImageUrl}/EC2.svg`, name: "EC2" },
    { imageUrl: `${baseImageUrl}/Lambda.svg`, name: "Lambda" },
    { imageUrl: `${baseImageUrl}/S3.svg`, name: "S3" },
  ];

  return (
    <Layout id="skills">
      <TitleHeader>Skills</TitleHeader>
      <SkillsLayout>
        <SkillsGroup title="よく使う/使っていた">
          {frequentlyUsedSkills.map((skill, index) => (
            <SkillsIcon key={index} imageUrl={skill.imageUrl} name={skill.name} />
          ))}
        </SkillsGroup>
        
        <SkillsGroup title="使ったことがある/勉強中" awsIcons={showAWSIcons ? awsIcons : null}>
          {learningSkills.map((skill, index) => (
            <SkillsIcon key={index} imageUrl={skill.imageUrl} name={skill.name} />
          ))}
          
          {/* AWS アイコンと展開ボタン */}
          <Box
            onClick={() => setShowAWSIcons(!showAWSIcons)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              padding: '10px',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#f0f8ff',
              },
              position: 'relative',
            }}
          >
            <Typography
              sx={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                fontSize: '15px',
                color: '#888',
                animation: 'bounce 1.5s infinite',
              }}
            >
              Tap
            </Typography>
            <SkillsIcon imageUrl={`${baseImageUrl}/AWS.svg`} name="AWS" />
            <IconButton style={{ padding: 0 }}>
              {showAWSIcons ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Box>
        </SkillsGroup>
      </SkillsLayout>
    </Layout>
  );
}
