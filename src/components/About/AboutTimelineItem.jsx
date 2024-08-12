import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab"

export const AboutTimelineItem = ({color, school, schoolDetail, outline}) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color={color} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {school}
        {schoolDetail}
        {outline}
      </TimelineContent>
    </TimelineItem>
  )
}
