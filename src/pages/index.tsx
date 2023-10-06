import {useEffect, useState} from 'react';

import {Container, Spacer} from '@nfq/react-grid';
import Head from 'next/head';

import {TaskForm} from 'Client/ui/components/TaskForm';
import TaskList from 'Client/ui/components/TaskList/TaskList';

import {useGetTasks} from 'Client/application/useCases/useGetTasks';

import type {ITask} from 'Client/domain/entities/Tasks';
import type {NextPageWithLayout} from 'types/global';

/**
 * HomePage.
 *
 * @returns The component.
 */
const HomePage: NextPageWithLayout = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const {getTasks} = useGetTasks();

    useEffect(() => {
        setTasks(getTasks());
    }, [getTasks]);

    return (
        <Container as="main">
            <Head><title>O2 Campaign Check | Dashboard</title></Head>
            <Spacer y={6} />
            <TaskForm setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </Container>
    );
};

/**
 * Gets the layout for this page.
 *
 * @param router        The router object from nextjs.
 * @param pageProps     All page props given from server.
 * @param PageComponent The page component to render.
 *
 * @returns The complete page.
 */
/* eslint-disable-next-line react/jsx-props-no-spreading */
HomePage.getLayout = (router, pageProps, PageComponent) => <PageComponent router={router} {...pageProps} />;

/**
 * Gets the layout key for the used layout.
 *
 * @returns The complete page.
 */
HomePage.getLayoutKey = () => '';

export default HomePage;