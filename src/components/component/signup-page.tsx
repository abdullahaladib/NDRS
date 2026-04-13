"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { signupService } from "@/app/(service)/signup-user";

export function SignupPage() {


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as unknown as any;
    const data = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
      address: target.address.value,
      phone: target.phone.value,
    };

    await signupService(data);
    alert("User Created Successfully");
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-primary to-primary/80">
      <Card className="w-full max-w-md p-6 space-y-4 bg-card text-card-foreground shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription className="text-muted-foreground">Create your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="font-medium">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                name="name"
                className="border-input focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="border-input focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="border-input focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address" className="font-medium">
                Address
              </Label>
              <Input
                id="address"
                placeholder="Enter your address"
                required
                name="address"
                className="border-input focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                name="phone"
                className="border-input focus:border-primary focus:ring-primary"
              />
            </div>
          </CardContent>
          <CardFooter className="">
            <div className="flex justify-start">
              <Link href="/login">
              <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
                >
              Back
            </Button>
            </Link>
            </div>
            <div className="w-44"></div>
            <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              Sign Up
            </Button>
            </div>
            
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
