
import {Container, Spacer} from '@nfq/react-grid';
import Head from 'next/head';

import {useTaskForm} from 'Client/ui/components/TaskForm/useTaskForm';
import {TaskForm} from 'UI/components/TaskForm';
import {TaskList} from 'UI/components/TaskList';

import {useGetTasks} from 'Application/useCases/useGetTasks';

import type {NextPageWithLayout} from 'types/global';

/**
 * HomePage.
 *
 * @returns The component.
 */
const HomePage: NextPageWithLayout = () => {
    const {data} = useGetTasks();
    const {handleAddTask} = useTaskForm();

    return (
        <Container as="main">
            <Head><title>O2 Campaign Check | Dashboard</title></Head>
            <Spacer y={6} />
            <TaskForm onSubmit={handleAddTask} />
            <TaskList tasks={data} />
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