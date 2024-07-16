import React from "react";
import { router, Link } from "@inertiajs/react";
import { useMutation } from "@tanstack/react-query";
import { createProject } from "@/Services/api/projects";
import { useMediaQuery } from "@/Hooks/use-media-query";
import { Plus, MoveRight, LoaderCircle } from "lucide-react";
import { Button, buttonVariants } from "@/Components/ui/button";
import * as Dialog from "@/Components/ui/dialog";
import * as Drawer from "@/Components/ui/drawer";
import * as Select from "@/Components/ui/select";
import { Progress } from "@/Components/ui/infinate-progress";
import { Text } from "@/Components/ui/paragraph";
import { Label } from "@/Components/ui/label";
import { cn } from "@/Utils/utils";


const ConfirmNewProjectCreation: React.FC<any> = () => {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const { mutate, reset, isPending, isError, isSuccess, error, data } =
        useMutation<{
            code: string;
        }>({
            mutationFn: async (data) => createProject(data),
            onSuccess: () => router.reload({ only: ["myProjects"] }),
        });

    if (isDesktop) {
        return (
            <Dialog.Dialog open={open} onOpenChange={setOpen} modal={true}>
                <Dialog.DialogTrigger asChild>
                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Créer un nouveau projet
                    </Button>
                </Dialog.DialogTrigger>
                <Dialog.DialogContent
                    className="mx-auto max-w-xl grid gap-4 rounded relative overflow-hidden"
                    classNames={{
                        overlay: "bg-black/25",
                    }}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    onCloseAutoFocus={(e) => e.preventDefault()}
                    onEscapeKeyDown={(e) => e.preventDefault()}
                    onInteractOutside={(e) => e.preventDefault()}
                >
                    <Dialog.DialogHeader className="space-y-4">
                        <Dialog.DialogTitle className="text-xl font-medium">
                            Confirmer la création du projet
                        </Dialog.DialogTitle>
                        <Dialog.DialogDescription>
                            Êtes-vous sûr de vouloir créer un nouveau projet ?
                            Cliquez sur « Créer » pour initialiser un nouveau
                            projet et passer à la page du formulaire, ou «
                            Annuler » pour fermer cette boîte de dialogue.
                        </Dialog.DialogDescription>
                    </Dialog.DialogHeader>
                    <div className="space-y-4">
                        <CreateNewProject
                            {...{
                                isPending,
                                isError,
                                isSuccess,
                                data,
                                error,
                                reset,
                                onCancel: () => setOpen(false),
                                onCreate: () => mutate(),
                            }}
                        />
                    </div>
                </Dialog.DialogContent>
            </Dialog.Dialog>
        );
    }

    return (
        <Drawer.Drawer open={open} onOpenChange={setOpen}>
            <Drawer.DrawerTrigger asChild>
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Créer un nouveau projet
                </Button>
            </Drawer.DrawerTrigger>
            <Drawer.DrawerContent
                onOpenAutoFocus={(e) => e.preventDefault()}
                onCloseAutoFocus={(e) => e.preventDefault()}
                onPointerDownOutside={(e) => e.preventDefault()}
                className="overflow-hidden"
            >
                <Drawer.DrawerHeader className="text-left">
                    <Drawer.DrawerTitle>
                        Confirmer la création du projet
                    </Drawer.DrawerTitle>
                    <Drawer.DrawerDescription>
                        Êtes-vous sûr de vouloir créer un nouveau projet ?
                        Cliquez sur « Créer » pour initialiser un nouveau projet
                        et passer à la page du formulaire, ou « Annuler » pour
                        fermer cette boîte de dialogue.
                    </Drawer.DrawerDescription>
                </Drawer.DrawerHeader>
                <div className="px-4 mb-4 space-y-4">
                    <CreateNewProject
                        {...{
                            isPending,
                            isError,
                            isSuccess,
                            data,
                            error,
                            reset,
                            onCancel: () => setOpen(false),
                            onCreate: () => mutate(),
                        }}
                    />
                </div>
            </Drawer.DrawerContent>
        </Drawer.Drawer>
    );
};

interface CreateNewProjectProps {
    isPending: boolean;
    isError: boolean;
    isSuccess: boolean;
    error: any;
    data: any;
    onCreate: () => void;
    onCancel: () => void;
    reset: () => void;
}

const CreateNewProject: React.FC<CreateNewProjectProps> = ({
    isPending,
    isError,
    isSuccess,
    data,
    error,
    onCreate,
    onCancel,
    reset,
}) => {
    if (isError) {
        return (
            <>
                <Text className="text-gray-800">
                    Une erreur est sourvenu lors de création de projet.
                    {error.message}
                </Text>

                <Button variant="destructive" className="w-full">
                    Annuler
                </Button>
            </>
        );
    }

    if (isSuccess) {
        return (
            <>
                <Text className="text-green-600">
                    Projet créer avec succés.
                </Text>

                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:gap-4 sm:mx-auto">
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                            onCancel();
                            setTimeout(() => {
                                reset();
                            }, 250);
                        }}
                    >
                        Fermer
                    </Button>
                    <Link
                        href={route("project.version.create", data.data.code)}
                        className={cn(buttonVariants({}), "w-full")}
                    >
                        Poursuivre la création
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-indigo-50 hidden data-[pending=true]:block"
                data-pending={isPending}
            >
                <Progress className="bg-indigo-600" />
            </div>
            <div className="grid">
                <div className="space-y-1">
                    <Label className="text-gray-800">
                        Sélectionner la division du projet
                    </Label>
                    <Select.Select disabled={isPending}>
                        <Select.SelectTrigger>
                            <Select.SelectValue placeholder="select divsion" />
                        </Select.SelectTrigger>
                        <Select.SelectContent>
                            <Select.SelectItem value="1">
                                division 1
                            </Select.SelectItem>
                        </Select.SelectContent>
                    </Select.Select>
                </div>
            </div>

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:gap-4 sm:mx-auto">
                <Button
                    variant="destructive"
                    className="w-full"
                    onClick={onCancel}
                    disabled={isPending}
                >
                    Annuler
                </Button>
                <Button
                    variant="default"
                    className="w-full items-center"
                    onClick={onCreate}
                    disabled={isPending}
                >
                    {isPending ? (
                        <>
                            <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                            Création de projet...
                        </>
                    ) : (
                        <>
                            Créer le projet
                            <MoveRight className="h-4 w-4 ml-2" />
                        </>
                    )}
                </Button>
            </div>
        </>
    );
};

export default ConfirmNewProjectCreation;