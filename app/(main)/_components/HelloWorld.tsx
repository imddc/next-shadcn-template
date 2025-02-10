'use client'

import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HelloWorld() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 animate-[random-move_60s_ease-in-out_infinite] rounded-full bg-purple-500 opacity-80 blur-[20rem]"></div>
      <div className="absolute left-0 top-0 size-[400px] translate-x-1/2 translate-y-1/2 animate-[random-move_60s_ease-in-out_infinite] rounded-full bg-indigo-200 opacity-20 blur-[20rem]"></div>

      <section className="flex-center container relative z-0 mx-auto h-screen">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-6xl font-extrabold leading-tight text-white sm:text-7xl">
            使用Next.js和Shadcn构建现代Web应用
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Next.js提供了一个高效的前端框架,而Shadcn则带来了优雅的UI组件。
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <Button size="lg">查看文档</Button>
            <Button
              className="flex-center gap-2"
              size="icon"
              variant="outline"
              onClick={() => window.open('https://github.com/imddc/next-shadcn-template')}
            >
              <Github className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
