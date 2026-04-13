"use client";

import { AdminNavbar } from "@/components/component/admin-header";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { diasterSubmit } from "@/app/(service)/disaster-submit-service";


const DisasterAlertPage = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      details: (event.target as any).details.value,
      location: (event.target as any).location.value,
      type: (event.target as any).type.value,
      severity: (event.target as any).severity.value,
    }
    await diasterSubmit(data);
    alert("Disaster Submitted Successfully");
  } 

  return (
    <div>
      <AdminNavbar />
      <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Submit Disaster Alert</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="details">Details</Label>
            <Textarea
              id="details"
              name="details"
              placeholder="Enter alert details"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="Enter location"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select name="type">
              <SelectTrigger>
                <SelectValue placeholder="Select disaster type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Earthquake">Earthquake</SelectItem>
                <SelectItem value="Flood">Flood</SelectItem>
                <SelectItem value="Hurricane">Hurricane</SelectItem>
                <SelectItem value="Wildfire">Wildfire</SelectItem>
                <SelectItem value="Landslide">Landslide</SelectItem>
                <SelectItem value="Tsunami">Tsunami</SelectItem>
                <SelectItem value="Drought">Drought</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="severity">Severity</Label>
            <Select name="severity">
              <SelectTrigger>
                <SelectValue placeholder="Select severity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button type="submit" className="w-full">Submit Alert</Button>
        </form>
      </CardContent>
    </Card>
    </div>
  )
};

export default DisasterAlertPage;