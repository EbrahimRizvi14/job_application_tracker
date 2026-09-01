import Image from "next/image";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import {ArrowRight} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className='flex-1'> 
        <section className='container mx-auto px-4 py-32'>
          <div className='mx-auto max-w-6xl text-center'>
            <h1 className="mb-6 text-4xl font-bold ">
              A better way to track job applications.
            </h1> 
            <p className='text-muted-foreground mb-8 text-xl'>
              Capture, organize, and manage your job search in one place.
            </p>
            <div className='flex flex-col items-center gap-5'>
              <Link href="/sign-up">
                <Button size='lg' className='h-10 px-5 text-lg font-medium' >
                  Start for free
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free forever. No credit card needed.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
          <section className='border-t border-gray-700 py-16:'>

          </section>
      </main>
    </div>
  );
}
