'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')

  const handleScroll = () => {
    const sections = ['about', 'projects']
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col lg:flex-row min-h-screen text-gray-100">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
      >
        <source src="/backgrounds/cyberpink.mp4" type="video/mp4" />
      </video>

      {/* Sidebar - adjusted width and padding */}
      <aside className="lg:fixed lg:flex lg:h-screen lg:w-[45vw] flex-col justify-between p-6 lg:pt-24 lg:px-12">
        <div className="lg:w-[80%] lg:pl-72 space-y-12 lg:space-y-16">
          <div>
            <h1 className="text-4xl lg:text-4xl font-bold text-[#D23097]">Cherry Caracas.</h1>
            <h4 className="text-xl lg:text-xl font-semibold text-gray-100 mt-2">AI Engineer</h4>
            <p className="text-base mt-4"></p>
            <Button 
              variant="outline" 
              className="mt-2 text-gray-300 border-gray-300 hover:text-[#D23097] hover:border-[#D23097] transition-colors"
              onClick={() => window.open('/Caracas_CV.pdf', '_blank')}
            >
              Resumé. 
            </Button>
          </div>

          <nav className="space-y-4">
            {['about', 'projects'].map((section) => (
              <div key={section} className="group">
                <a
                  href={`#${section}`}
                  className={`relative block text-sm font-semibold uppercase tracking-wider transition-colors
                    ${activeSection === section ? 'text-[#D23097]' : 'text-gray-400'}
                    group-hover:text-[#D23097]
                    after:absolute after:block after:w-full after:h-[2px] after:bg-[#D23097]
                    after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300
                    group-hover:after:scale-x-100 group-hover:after:origin-bottom-left
                    ${activeSection === section ? 'after:scale-x-100' : ''}
                  `}
                >
                  {section}
                </a>
              </div>
            ))}
          </nav>
          
        </div>

        <div className="flex gap-4 lg:gap-6 mt-8 lg:mt-0 lg:pb-12 lg:pl-72">
          <a 
            href="https://github.com/cherrymaegrace" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[#D23097] transition-colors"
          >
            <Github className="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/cherrymaegrace" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-[#D23097] transition-colors"
          >
            <Linkedin className="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
          <a 
            href="mailto:cherrymae.caracas@gmail.com" 
            className="text-gray-400 hover:text-[#D23097] transition-colors"
          >
            <Mail className="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:pt-24 lg:px-12 lg:pr-60 lg:w-[55vw] lg:ml-[45vw]">
        {/* About Section */}
        <section id="about" className="mb-24 lg:mb-36 lg:pr-32">
          <h2 className="mb-8 text-xl font-bold text-[#D23097] lg:hidden">About Me.</h2>
          <div className="max-w-2xl space-y-4 lg:space-y-6 text-sm lg:text-lg text-gray-300">
            <p className="text-base">
            I am a developer with hands-on experience <b className="text-[#D23097]">integrating AI into applications</b> to address real-world challenges.
            </p>
            <p className="text-base">
            This portfolio highlights the intelligent systems I’ve built, with a strong focus on functionality, user impact, and practical application.
            These projects reflect my growing expertise in creating AI-driven solutions, and I am eager to expand my experience and establish myself as a skilled and reliable AI engineer.
            </p>
            <p className="text-base">
              My professional background is focused on <b className="text-[#D23097]">system and application integration</b>.
              My expertise includes <b className="text-[#D23097]">developing and integrating RESTful APIs</b> to enable seamless communication between diverse systems.
              Additionally, I have extensive experience <b className="text-[#D23097]">implementing and integrating website tag management solutions</b> to ensure accurate data tracking and analytics across high-traffic public websites.
            </p>
            <p className='text-base'>
            I have worked in both small, agile teams and large, cross-functional projects across the <b className="text-[#D23097]">banking</b> and <b className="text-[#D23097]">utilities</b> industries.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 lg:mb-36 lg:pr-32">
          <h2 className="mb-8 text-xl font-bold text-[#D23097] lg:hidden">Projects.</h2>
          <div className="space-y-12">

          <Card className="relative overflow-hidden transition-all duration-300 hover:glass-effect border-0">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00011A]/10 to-[#00011A]/30 backdrop-blur-[2px]"></div>
            </div>
            <CardContent className="p-6 flex flex-col relative z-10">
              <div className="flex flex-col justify-between">
                <div className="mb-4">
                  <div className="aspect-video rounded-lg bg-gray-100/50 overflow-hidden">
                    <Image 
                      src="/snaps/campaignvista.png"
                      alt="CampaignVista preview"
                      width={250}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <a 
                      href="https://github.com/cherrymaegrace/AIR_Projects/tree/main/06_optimized_marketing_ai_agents"
                      className="text-lg lg:text-xl font-semibold text-gray-100 hover:text-[#D23097] transition-colors">
                        CampaignVista ↗
                    </a>
                  </div>
                  <p className="text-sm lg:text-sm text-gray-300 mb-4">
                  
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">OpenAI Swarm</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Python</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-all duration-300 hover:glass-effect border-0">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00011A]/10 to-[#00011A]/30 backdrop-blur-[2px]"></div>
            </div>
            <CardContent className="p-6 flex flex-col relative z-10">
              <div className="flex flex-col justify-between">
                <div className="mb-4">
                  <div className="aspect-video rounded-lg bg-gray-100/50 overflow-hidden">
                    <Image 
                      src="/snaps/engage.png"
                      alt="Engage preview"
                      width={250}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <a 
                      href="https://github.com/cherrymaegrace/AIR_Projects/tree/main/05_engage_nlg_rag"
                      className="text-lg lg:text-xl font-semibold text-gray-100 hover:text-[#D23097] transition-colors">
                        ENGAGE ↗
                    </a>
                  </div>
                  <p className="text-sm lg:text-sm text-gray-300 mb-4">
                    ENGAGE is a sophisticated email marketing tool that leverages Retrieval-Augmented Generation (RAG) and AI to create highly personalized email campaigns.
                    The application combines customer segmentation data with purchase behavior to generate targeted, engaging email content for various marketing scenarios.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">OpenAI</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">LangChain</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Streamlit</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">ChromaDB</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Python</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-all duration-300 hover:glass-effect border-0">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00011A]/10 to-[#00011A]/30 backdrop-blur-[2px]"></div>
            </div>
            <CardContent className="p-6 flex flex-col relative z-10">
              <div className="flex flex-col justify-between">
                
                <div className="mb-4">
                  <div className="aspect-video rounded-lg bg-gray-100/50 overflow-hidden">
                    <Image 
                      src="/snaps/notesmith.png"
                      alt="NoteSmith preview"
                      width={250}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <a 
                      href="https://github.com/cherrymaegrace/AIR_Projects/tree/main/03_notesmith_using_openai_api"
                      className="text-lg lg:text-xl font-semibold text-gray-100 hover:text-[#D23097] transition-colors">
                        NoteSmith ↗
                    </a>
                  </div>
                  <p className="text-sm lg:text-sm text-gray-300 mb-4">
                    NoteSmith is an intelligent study assistant built on Streamlit that leverages OpenAI's powerful GPT models through their API.
                    This chatbot analyzes uploaded PDF files, creates customized Q&As, and summarizes topics based on the content of the PDF.
                    Using OpenAI's advanced natural language processing capabilities, it can understand context, generate relevant questions, and provide detailed explanations tailored to the study material.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">OpenAI</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">LangChain</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Streamlit</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Python</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-all duration-300 hover:glass-effect border-0">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00011A]/10 to-[#00011A]/30 backdrop-blur-[2px]"></div>
            </div>
            <CardContent className="p-6 flex flex-col relative z-10">
              <div className="flex flex-col justify-between">
                
                <div className="mb-4">
                  <div className="aspect-video rounded-lg bg-gray-100/50 overflow-hidden">
                    <Image 
                      src="/snaps/blockmate.png"
                      alt="BlockMate preview"
                      width={250}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <a 
                      href="https://github.com/cherrymaegrace/AIR_Projects/tree/main/04_blockmate_rag"
                      className="text-lg lg:text-xl font-semibold text-gray-100 hover:text-[#D23097] transition-colors">
                        BlockMate ↗
                    </a>
                  </div>
                  <p className="text-sm lg:text-sm text-gray-300 mb-4">
                    NoteSmith is an intelligent study assistant built on Streamlit that leverages OpenAI's powerful GPT models through their API.
                    This chatbot analyzes uploaded PDF files, creates customized Q&As, and summarizes topics based on the content of the PDF.
                    Using OpenAI's advanced natural language processing capabilities, it can understand context, generate relevant questions, and provide detailed explanations tailored to the study material.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">OpenAI</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">LangChain</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Streamlit</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">ChromaDB</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Python</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-all duration-300 hover:glass-effect border-0">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00011A]/10 to-[#00011A]/30 backdrop-blur-[2px]"></div>
            </div>
            <CardContent className="p-6 flex flex-col relative z-10">
              <div className="flex flex-col justify-between">
                
                <div className="mb-4">
                  <div className="aspect-video rounded-lg bg-gray-100/50 overflow-hidden">
                    <Image 
                      src="/snaps/sentiment.png"
                      alt="Sentiment Classifier preview"
                      width={250}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <a 
                      href="https://github.com/cherrymaegrace/AIR_Projects/tree/main/01_sentiment_analysis_spacy_hf"
                      className="text-lg lg:text-xl font-semibold text-gray-100 hover:text-[#D23097] transition-colors">
                        Sentiment Classifier ↗
                    </a>
                  </div>
                  <p className="text-sm lg:text-sm text-gray-300 mb-4">
                    This app is a sentiment analysis tool that allows you to analyze the sentiment of a piece of text using two different methods: spaCy and HuggingFace.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Python</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">spaCy</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">HuggingFace</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-all duration-300 hover:glass-effect border-0">
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00011A]/10 to-[#00011A]/30 backdrop-blur-[2px]"></div>
            </div>
            <CardContent className="p-6 flex flex-col relative z-10">
              <div className="flex flex-col justify-between">
                
                <div className="mb-4">
                  <div className="aspect-video rounded-lg bg-gray-100/50 overflow-hidden">
                    <Image 
                      src="/snaps/finetuning.png"
                      alt="Finetuning preview"
                      width={250}
                      height={150}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <a 
                      href="https://github.com/cherrymaegrace/AIR_Projects/tree/main/02_finetuning_gemma_2b"
                      className="text-lg lg:text-xl font-semibold text-gray-100 hover:text-[#D23097] transition-colors">
                        Finetuning Gemma-2B for Data Science Q&A ↗
                    </a>
                  </div>
                  <p className="text-sm lg:text-sm text-gray-300 mb-4">
                    This project explores fine-tuning the Gemma-2b instruct model on the soufyane/DATA_SCIENCE_QA dataset from Hugging Face. The goal is to improve the model's ability to answer data science related questions.
                  </p>
                  <p className="text-sm lg:text-sm text-gray-300 mb-4 hover:text-[#D23097] transition-colors">
                  <a href="https://huggingface.co/cherrymaecaracas/gemma-2b-it-ft-data-science-qa">Finetuned Model ↗</a>
                  </p>
                  
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">Python</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">PyTorch</Badge>
                  <Badge variant="outline" className="text-gray-300 border-[#D23097] text-xs">HuggingFace</Badge>
                </div>

              </div>
            </CardContent>
          </Card>            
          </div>
        </section>

      </main>
    </div>
  )
}

