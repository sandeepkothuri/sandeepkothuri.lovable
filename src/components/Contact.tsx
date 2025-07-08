
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ksandy.c16@gmail.com',
      href: 'mailto:ksandy.c16@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(562) 391-7823',
      href: 'tel:+15623917823',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Long Beach, CA',
      href: '#',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text font-poppins">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Ready to turn your data into insights or bring your design ideas to life? 
              Let's discuss how we can work together to achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <Card key={item.label} className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-4">
                      <a
                        href={item.href}
                        className="flex items-center space-x-4 hover:text-primary transition-colors duration-200"
                      >
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 glass-effect rounded-lg border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 transform hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-3 glass-effect rounded-lg border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 transform hover:scale-110"
                  >
                    <Github className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="glass-effect border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary/60 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-primary/20 focus:border-primary/60 transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary/60 transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary/60 transition-all duration-200 resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
