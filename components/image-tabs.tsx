"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImageTabs() {
    const [activeTab, setActiveTab] = useState('organize'); //organize, hired, boards
    return (
        <section className='border-t border-gray-700 py-16:'>
            <div className='container mx-auto px-4 '>
              <div className='mx-auto max-w-6xl'>
                <div className='flex gap-2 justify-center mb-8 mt-5'>
                  <Button 
                    onClick={() => setActiveTab('organize')} 
                    className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'organize' ? 'bg-primary text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    Organize Applications
                  </Button>
                  <Button 
                    onClick={() => setActiveTab('hired')} 
                    className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'hired' ? 'bg-primary text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    Get Hired
                  </Button>
                  <Button 
                    onClick={() => setActiveTab('boards')} 
                    className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'boards' ? 'bg-primary text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    Manage Boards
                  </Button>
                </div>
                <div className='relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-700 shadow-xl bottom-5'>
                  {activeTab === 'organize' && (
                  <Image 
                    src="/hero-section/hero1.png"
                    alt='Organize Applications'
                    width={1200}
                    height={800}/>
                  )}

                    {activeTab === 'hired' && (
                      <Image 
                        src="/hero-section/hero2.png"
                        alt='Get Hired'
                        width={1200}
                        height={800}
                      />
                    )}

                    {activeTab === 'boards' && (
                      <Image 
                        src="/hero-section/hero3.png"
                        alt='Manage Boards'
                        width={1200}
                        height={800}
                      />
                    )}
                </div>
              </div>
            </div>
          </section>

)}