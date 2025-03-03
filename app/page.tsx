"use client"

import { useState } from "react"
import { Phone, Video, Smile, Paperclip, Send, MoreVertical, Search, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChatApp() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search chats..." className="pl-8" />
            </div>
          </div>

          <Tabs defaultValue="chats" className="flex-1">
            <TabsList className="w-full justify-start px-4 py-2">
              <TabsTrigger value="chats">Chats</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
              <TabsTrigger value="calls">Calls</TabsTrigger>
            </TabsList>
            <ScrollArea className="flex-1">
              <TabsContent value="chats" className="m-0">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?${i}`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">User {i}</p>
                        <span className="text-xs text-muted-foreground">12:30</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">Latest message preview...</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {/* Received Message */}
              <div className="flex items-start gap-2 max-w-[80%]">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3">
                  <p>Hey! How are you doing?</p>
                  <span className="text-xs text-muted-foreground mt-1 block">12:30</span>
                </div>
              </div>

              {/* Sent Message */}
              <div className="flex items-start gap-2 max-w-[80%] ml-auto flex-row-reverse">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div className="bg-primary text-primary-foreground rounded-lg p-3">
                  <p>I'm doing great! Thanks for asking. How about you?</p>
                  <span className="text-xs text-primary-foreground/70 mt-1 block">12:31</span>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Smile className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

