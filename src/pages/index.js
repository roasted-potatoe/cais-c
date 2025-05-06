import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import Head from 'next/head';


function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default function Home() {
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Head>
        <title>C AI S - Custom AI Solutions for Construction</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Hero Section */}
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: 'background.default',
        px: 4,
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            gutterBottom 
            sx={{ 
              maxWidth: '800px',
              mb: 4,
            }}
          >
            Revolutionizing construction with bespoke artificial intelligence innovations
          </Typography>
          <Button 
            variant="outlined" 
            color="primary"
            size="large"
            sx={{ 
              borderColor: 'rgba(255, 255, 255, 0.5)',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
              }
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>


      {/* Services Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
            Our Services
          </Typography>
          
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              mb: 4,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 300,
                minWidth: 'auto',
                mx: 2,
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'white',
                height: 1,
              },
            }}
          >
            <Tab label="AI Automation" />
            <Tab label="Integrations" />
            <Tab label="Custom Tools" />
          </Tabs>


          <TabPanel value={value} index={0}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="text.secondary">
                  Streamline your construction processes with intelligent automation solutions 
                  tailored to your specific needs. From project management to resource allocation, 
                  our AI systems optimize efficiency.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 0 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Key Features
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Automated scheduling<br/>
                      • Resource optimization<br/>
                      • Predictive maintenance<br/>
                      • Real-time monitoring
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>


          <TabPanel value={value} index={1}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="text.secondary">
                  Seamlessly connect your existing construction management systems with our 
                  AI-powered integrations. Enhance data flow and decision-making across platforms.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 0 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Integration Capabilities
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • ERP Systems<br/>
                      • Project Management Tools<br/>
                      • BIM Software<br/>
                      • IoT Devices
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>


          <TabPanel value={value} index={2}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" color="text.secondary">
                  Get bespoke AI tools designed specifically for your construction business needs. 
                  From custom analytics to specialized prediction models, we build what you need.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 0 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Custom Solutions
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Risk Assessment AI<br/>
                      • Cost Prediction Models<br/>
                      • Quality Control Systems<br/>
                      • Safety Monitoring AI
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </Container>
      </Box>


      {/* Footer */}
      <Box sx={{ bgcolor: 'background.default', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} C AI S. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}