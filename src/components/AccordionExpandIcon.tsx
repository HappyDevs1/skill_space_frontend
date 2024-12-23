import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from "framer-motion";

export default function AccordionExpandIcon() {
  return (
    <motion.div className='flex flex-col gap-5 my-14' initial={{ scale: 0.5 }}
    animate={{ scale: 1, transition: { duration: 0.8 } }}>
      <Accordion className='border px-2 py-3'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p className='font-bold text-lg'>How do I post a job?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To post a job, simply navigate to the "Post a Job" section, fill in the necessary details about the job role, location, and requirements, and click on "Post". Your job listing will be live and visible to potential candidates immediately.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='border px-2 py-3'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p className='font-bold text-lg'>Is it free to post a job?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you can post a job for free! We offer a free posting option for employers to help you find the right talent without any cost.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='border px-2 py-3'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p className='font-bold text-lg'>How do I apply for a job?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To apply for a job, simply browse through the listings, click on the job you're interested in, and select the "Apply Now" button. Follow the prompts to upload your resume and submit your application.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='border px-2 py-3'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p className='font-bold text-lg'>How do I get in touch with customer support?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you need assistance, you can reach our customer support team through the "Contact Us" page. We are available via email or live chat to help resolve any issues or answer your questions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='border px-2 py-3'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p className='font-bold text-lg'>Can I edit my job listing after posting it?</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you can edit your job listing anytime. Just go to your posted jobs, select the one you'd like to update, and make the necessary changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
}