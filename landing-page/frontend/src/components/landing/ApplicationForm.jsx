import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ApplicationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        level: "rookie",
        bio: "",
    })
    const [status, setStatus] = useState("idle") // idle, submitting, success, error
    const [errorMsg, setErrorMsg] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("submitting")
        setErrorMsg("")

        try {
            const res = await fetch("/api/applications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (!res.ok) throw new Error("Failed to submit application")

            setStatus("success")
            setFormData({ name: "", email: "", country: "", level: "rookie", bio: "" })
        } catch (err) {
            setErrorMsg("Something went wrong. Please try again.")
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div className="container mx-auto max-w-md py-20 text-center">
                <div className="border-2 border-primary bg-card p-8">
                    <h3 className="mb-4 text-2xl font-bold uppercase">Application Received</h3>
                    <p className="mb-6 text-muted-foreground">
                        Thanks for applying to The Developer Foundry. We'll be in touch soon.
                    </p>
                    <Button
                        onClick={() => setStatus("idle")}
                        className="rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                        SEND ANOTHER
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <section className="bg-background py-20">
            <div className="container mx-auto max-w-xl px-4">
                <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-tight md:text-4xl text-foreground">
                    Apply Now
                </h2>

                <Card className="rounded-none border-2 border-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-card">
                    <CardHeader className="border-b-2 border-primary bg-card p-6">
                        <CardTitle className="text-xl font-bold uppercase text-foreground">Candidate Information</CardTitle>
                    </CardHeader>
                    <CardContent className="bg-card p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-base font-bold uppercase text-foreground">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="rounded-none border-2 border-primary bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-base font-bold uppercase text-foreground">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="rounded-none border-2 border-primary bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="country" className="text-base font-bold uppercase text-foreground">Country</Label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="flex h-10 w-full rounded-none border-2 border-primary bg-transparent px-3 py-2 text-sm focus:outline-none text-foreground"
                                >
                                    <option value="" disabled>Select your country</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="KE">Kenya</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="GH">Ghana</option>
                                    <option value="EG">Egypt</option>
                                    <option value="RW">Rwanda</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="level" className="text-base font-bold uppercase text-foreground">Current Level</Label>
                                <select
                                    id="level"
                                    name="level"
                                    value={formData.level}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-none border-2 border-primary bg-transparent px-3 py-2 text-sm focus:outline-none text-foreground"
                                >
                                    <option value="rookie">Rookie (Beginner)</option>
                                    <option value="adventurer">Adventurer (Intermediate)</option>
                                    <option value="master">Master (Advanced)</option>
                                </select>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="bio" className="text-base font-bold uppercase text-foreground">Why do you want to join?</Label>
                                <Textarea
                                    id="bio"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    required
                                    className="min-h-[120px] rounded-none border-2 border-primary bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
                                />
                            </div>

                            {errorMsg && (
                                <p className="text-sm font-bold text-destructive">{errorMsg}</p>
                            )}

                            <Button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full rounded-none border-2 border-primary bg-accent py-6 text-lg font-bold text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
                            >
                                {status === "submitting" ? "SENDING..." : "SUBMIT APPLICATION"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
