'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { volunteerService } from "@/app/(service)/volunteer-service"
import { useRouter } from "next/navigation"


export function VolunteerForm() {
  const router = useRouter();
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as unknown as any;
    const data = {
      skills: target.skills.value,
      experience: target.experience.value,
    };
    
    await volunteerService(data);
    router.push("/UserHomePage");
  }


  return (
    <form onSubmit={onSubmit}>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Volunteer Application</CardTitle>
          <CardDescription>Tell us about your survival skills and experience.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="survival-skills">Survival Skills</Label>
              <Textarea
                id="survival-skills"
                name="skills"
                placeholder="Describe your survival skills (camping, wilderness navigation, first aid, etc.)"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Previous Experience</Label>
              <Textarea id="experience" name="experience" placeholder="List your previous volunteer or work experience" rows={4} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="why-volunteer">Why do you want to volunteer?</Label>
              <Textarea id="why-volunteer" placeholder="Explain why you want to be a volunteer" rows={4} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/userProfile"><Button>Back</Button></Link>
          <Button type="submit" className="ml-auto">
            Submit Application
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
