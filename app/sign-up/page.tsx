'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUp() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background px-4 py-12">
            <form className="w-full max-w-md">
                <Card className="border-border/60 shadow-xl">
                    <CardHeader className="space-y-2">
                        <CardTitle className="text-3xl font-bold tracking-tight">
                            Sign Up
                        </CardTitle>

                        <CardDescription className="text-sm text-muted-foreground">
                            Create an account to get started.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="name">
                                Name
                            </Label>

                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                required
                                className="h-11"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email
                            </Label>

                            <Input
                                id="email"
                                type="email"
                                placeholder="john.doe@example.com"
                                required
                                className="h-11"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">
                                Password
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                className="h-11"
                            />
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4">
                        <Button
                            type="submit"
                            className="h-11 w-full text-sm font-semibold"
                        >
                            Sign Up
                        </Button>

                        <p className="text-center text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link
                                href="/sign-in"
                                className="font-medium text-primary hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}