import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  AutoAwesome,
  Business,
  Code,
  Inventory2,
  PrecisionManufacturing,
  SmartToy,
  Web,
  Phone,
} from "@mui/icons-material";

import "./App.css";

const services = [
  {
    icon: <Business />,
    title: "Custom ERP Development",
    description:
      "Business-specific ERP solutions designed to simplify your daily operations and workflows.",
  },
  {
    icon: <PrecisionManufacturing />,
    title: "Manufacturing Automation",
    description:
      "Digitize BOM, inventory, purchase, production and other manufacturing processes.",
  },
  {
    icon: <SmartToy />,
    title: "AI Automation",
    description:
      "Convert repetitive manual work into intelligent automated workflows using AI.",
  },
  {
    icon: <Web />,
    title: "Web Applications",
    description:
      "Modern, scalable and responsive web applications for growing businesses.",
  },
];

const solutions = [
  "BOM Management",
  "Inventory Management",
  "Purchase & PO Management",
  "Business Process Automation",
  "AI Document Processing",
  "Custom Business Dashboards",
];

function App() {
  return (
    <>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(7, 16, 29, 0.88)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.5rem",
                letterSpacing: "-0.5px",
                flexGrow: 1,
              }}
            >
              <span className="brand-veera">VEERA</span>{" "}
              <span className="brand-tech">TECHNOLOGIES</span>
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {["Home", "Services", "Solutions", "About", "Contact"].map(
                (item) => (
                  <Typography
                    key={item}
                    className="nav-link"
                    component="a"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Stack>

            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              href="#contact"
              sx={{
                ml: 3,
                borderRadius: 2,
                px: 2.5,
                display: { xs: "none", sm: "flex" },
              }}
            >
              Let's Talk
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO */}
      <Box id="home" className="hero-section">
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Chip
                icon={<AutoAwesome />}
                label="ERP • AI • AUTOMATION • SOFTWARE"
                className="hero-chip"
              />

              <Typography className="hero-title">
                Build Smarter.
                <br />
                <span>Automate Better.</span>
              </Typography>

              <Typography className="hero-description">
                We build custom software solutions that help businesses
                simplify operations, automate repetitive processes and grow
                faster.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  href="#contact"
                  className="primary-btn"
                >
                  Get a Free Consultation
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#services"
                  className="secondary-btn"
                >
                  Explore Services
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={4}
                sx={{ mt: 5 }}
                className="hero-stats"
              >
                <Box>
                  <Typography variant="h5">ERP</Typography>
                  <Typography>Solutions</Typography>
                </Box>

                <Box>
                  <Typography variant="h5">AI</Typography>
                  <Typography>Automation</Typography>
                </Box>

                <Box>
                  <Typography variant="h5">Web</Typography>
                  <Typography>Applications</Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box className="hero-card">
                <Box className="floating-card card-one">
                  <Inventory2 />
                  <Box>
                    <strong>Inventory</strong>
                    <small>Automated Management</small>
                  </Box>
                </Box>

                <Box className="floating-card card-two">
                  <Code />
                  <Box>
                    <strong>ERP System</strong>
                    <small>Connected Business</small>
                  </Box>
                </Box>

                <Box className="floating-card card-three">
                  <SmartToy />
                  <Box>
                    <strong>AI Automation</strong>
                    <small>Work Smarter</small>
                  </Box>
                </Box>

                <Box className="center-orbit">
                  <Typography>V</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box id="services" className="section">
        <Container maxWidth="lg">
          <Box className="section-heading">
            <Typography className="eyebrow">WHAT WE DO</Typography>

            <Typography className="section-title">
              Technology That Solves
              <br />
              <span>Real Business Problems</span>
            </Typography>

            <Typography className="section-description">
              From ERP development to AI automation, we create practical
              software solutions around your business processes.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid key={service.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card className="service-card">
                  <CardContent>
                    <Box className="service-icon">{service.icon}</Box>

                    <Typography className="service-title">
                      {service.title}
                    </Typography>

                    <Typography className="service-description">
                      {service.description}
                    </Typography>

                    <Button
                      endIcon={<ArrowForward />}
                      className="learn-btn"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SOLUTIONS */}
      <Box id="solutions" className="solutions-section">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography className="eyebrow">MANUFACTURING SOLUTIONS</Typography>

              <Typography className="section-title">
                Turn Manual Processes
                <br />
                Into <span>Digital Workflows.</span>
              </Typography>

              <Typography className="section-description">
                Replace scattered Excel sheets and repetitive manual tasks
                with connected software built around your actual workflow.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                href="#contact"
                className="primary-btn"
                sx={{ mt: 3 }}
              >
                Discuss Your Process
              </Button>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="solution-box">
                {solutions.map((solution, index) => (
                  <Box className="solution-item" key={solution}>
                    <Box className="solution-number">
                      0{index + 1}
                    </Box>

                    <Typography>{solution}</Typography>

                    <ArrowForward className="solution-arrow" />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ABOUT */}
      <Box id="about" className="section about-section">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box className="about-visual">
                <Typography>VEERA</Typography>
                <span>TECHNOLOGIES</span>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography className="eyebrow">ABOUT VEERA TECHNOLOGIES</Typography>

              <Typography className="section-title">
                Software Built Around
                <br />
                <span>Your Business.</span>
              </Typography>

              <Typography className="section-description">
                We focus on building custom software instead of forcing
                businesses to change their processes around generic tools.
              </Typography>

              <Typography className="section-description">
                Our focus areas include ERP systems, manufacturing workflows,
                business automation, AI-powered document processing and modern
                web applications.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      {/* CTA */}
<Box id="contact" className="cta-section">
  <Container maxWidth="md">
    <Typography className="cta-title">
      Have a Business Process
      <br />
      You Want to Automate?
    </Typography>

    <Typography className="cta-description">
      Tell us about your process. Let's explore how software can make it
      simpler.
    </Typography>

    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        variant="contained"
        size="large"
        endIcon={<ArrowForward />}
        className="primary-btn"
      >
        Start a Conversation
      </Button>

      <Button
        variant="outlined"
        size="large"
        startIcon={<Phone />}
        href="tel:+91XXXXXXXXXX"
        className="secondary-btn"
      >
        +91 8888650998
      </Button>
    </Stack>
  </Container>
</Box>

      {/* FOOTER */}
      <Box className="footer">
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Typography>
              © 2026 <strong>VEERA Technologies</strong>. All rights reserved.
            </Typography>

            <Typography>
              Smart Software & Automation Solutions
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default App;